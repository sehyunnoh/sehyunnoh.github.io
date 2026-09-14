import type { Locale } from './config';

/**
 * 화면에 보이는 문자열은 전부 여기 모은다.
 * 메뉴(About Me, Projects…)와 카테고리명(Dev, Travel…)은 원래부터 영어라 대상이 아니다.
 */
const ui = {
	ko: {
		'site.description': '개발일기와 취미 활동을 기록하는 공간입니다.',
		'home.greeting': '안녕하세요 👋',
		'home.recent': '최근 글',
		'list.empty': '아직 작성된 글이 없습니다.',
		'list.categoryDesc': (label: string) => `${label} 기록`,
		'tags.title': '태그',
		'tags.all': '← 전체 태그',
		'tags.allDesc': '전체 태그 목록',
		'tags.count': (n: number) => `${n}개의 글`,
		'tags.taggedDesc': (tag: string) => `'${tag}' 태그가 붙은 글 목록`,
		'projects.intro': '직접 만들고 운영 중인 프로젝트들입니다.',
		'projects.desc': '직접 만든 프로젝트 모음',
		'about.desc': '안녕하세요, sehyunnoh입니다.',
		'post.koOnly': '이 글은 아직 한국어로만 제공됩니다.',
		'post.lastUpdated': '최종 수정',
		'nav.menu': '메뉴 열기',
		'nav.language': '언어',
		'offline.title': '오프라인',
		'offline.desc': '네트워크에 연결되어 있지 않습니다.',
		'offline.body': '네트워크에 연결되어 있지 않아 이 페이지를 불러올 수 없습니다.',
		'offline.retry': '연결이 복구되면 다시 시도해 주세요.',
	},
	en: {
		'site.description': 'Notes on building things, and on the hobbies in between.',
		'home.greeting': 'Hello 👋',
		'home.recent': 'Recent posts',
		'list.empty': 'No posts yet.',
		'list.categoryDesc': (label: string) => `Posts about ${label}`,
		'tags.title': 'Tags',
		'tags.all': '← All tags',
		'tags.allDesc': 'Every tag on this blog',
		'tags.count': (n: number) => `${n} post${n === 1 ? '' : 's'}`,
		'tags.taggedDesc': (tag: string) => `Posts tagged '${tag}'`,
		'projects.intro': 'Things I have built and still run.',
		'projects.desc': 'Projects I have built',
		'about.desc': "Hi, I'm sehyunnoh.",
		'post.koOnly': 'This post is only available in Korean.',
		'post.lastUpdated': 'Last updated on',
		'nav.menu': 'Open menu',
		'nav.language': 'Language',
		'offline.title': 'Offline',
		'offline.desc': 'You are not connected to the network.',
		'offline.body': 'This page could not be loaded because you are offline.',
		'offline.retry': 'Please try again once the connection is back.',
	},
} as const;

type Keys = keyof (typeof ui)['ko'];

export function useTranslations(locale: Locale) {
	return function t<K extends Keys>(key: K): (typeof ui)['ko'][K] {
		return ui[locale][key] as (typeof ui)['ko'][K];
	};
}
