// 새 프로젝트를 추가하려면 이 배열에 항목을 하나 추가하면 됩니다.
// 배열 순서대로 카드가 표시됩니다.

export interface Project {
	name: string;
	description: string;
	url: string;
	tags?: string[];
}

export const PROJECTS: Project[] = [
	{
		name: 'Pickleball',
		description: '피클볼 샷과 기술을 상황별·레벨별로 정리한 영상 기반 학습 사이트.',
		url: 'https://pickleball-livid.vercel.app/',
		tags: ['pickleball'],
	},
	{
		name: 'Reminder',
		description: '주기적으로 교체하고 갱신해야 하는 것들을 제때 알려주는 리마인더 서비스.',
		url: 'https://reminder-sandy-two.vercel.app/',
	},
	{
		name: 'Acorn',
		description: 'Acorn 웹 서비스.',
		url: 'https://acorn-liard.vercel.app/',
	},
	{
		name: 'Tap Steps',
		description: '탭댄스 스텝 연습을 도와주는 사이트.',
		url: 'https://sehyunnoh.github.io/tap-dance/',
		tags: ['tapdance'],
	},
	{
		name: 'Tech Blog',
		description: 'AI 시스템, 웹 엔지니어링, 인프라 설계를 깊이 있게 다루는 기술 블로그.',
		url: 'https://lleg.dev/',
	},
];
