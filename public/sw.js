// 이 블로그는 정적 사이트라서 캐시 전략을 단순하게 가져간다.
//   - 페이지(HTML): 네트워크 우선. 캐시를 먼저 주면 글을 고쳐도 예전 내용이 계속 보인다.
//   - /_astro/ 자산: 파일명에 해시가 붙으므로 내용이 바뀌면 이름도 바뀐다. 캐시 우선이 안전하다.
//   - 그 외(외부 도메인 등): 손대지 않고 그대로 통과시킨다.
const VERSION = 'v1';
const CACHE = `lleg-${VERSION}`;
const OFFLINE_URL = '/offline/';

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then((cache) => cache.addAll(['/', OFFLINE_URL]))
			.then(() => self.skipWaiting()),
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
			.then(() => self.clients.claim()),
	);
});

self.addEventListener('fetch', (event) => {
	const { request } = event;
	if (request.method !== 'GET') return;

	const url = new URL(request.url);
	if (url.origin !== self.location.origin) return;

	// 페이지 이동: 네트워크 우선, 실패하면 캐시, 그것도 없으면 오프라인 안내
	if (request.mode === 'navigate') {
		event.respondWith(
			fetch(request)
				.then((response) => {
					const copy = response.clone();
					caches.open(CACHE).then((cache) => cache.put(request, copy));
					return response;
				})
				.catch(() => caches.match(request).then((hit) => hit || caches.match(OFFLINE_URL))),
		);
		return;
	}

	// 해시가 붙은 빌드 산출물: 캐시 우선
	if (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/icons/')) {
		event.respondWith(
			caches.match(request).then(
				(hit) =>
					hit ||
					fetch(request).then((response) => {
						const copy = response.clone();
						caches.open(CACHE).then((cache) => cache.put(request, copy));
						return response;
					}),
			),
		);
	}
});
