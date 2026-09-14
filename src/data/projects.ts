// 새 프로젝트를 추가하려면 이 배열에 항목을 하나 추가하면 됩니다.
// 그룹 안에서는 배열 순서대로, 그룹끼리는 PROJECT_GROUPS 순서대로 표시됩니다.
import type { Locale } from '../i18n/config';

/** 그룹 제목. 배열 순서가 곧 화면에 나오는 순서입니다. */
export const PROJECT_GROUPS = [
	{ id: 'learning', label: { ko: '배우고 연습하는 것', en: 'Learning & practice' } },
	{ id: 'tools', label: { ko: '생활을 돕는 도구', en: 'Everyday tools' } },
] as const;

export type ProjectGroup = (typeof PROJECT_GROUPS)[number]['id'];

export interface Project {
	name: string;
	description: Record<Locale, string>;
	url: string;
	tags?: string[];
	/** 그룹을 안 적으면 맨 아래 '그 외'로 떨어집니다 — 깜빡해도 페이지는 안 깨집니다. */
	group?: ProjectGroup;
	/** 그룹 밖 맨 위에 따로 세울 항목 */
	featured?: boolean;
}

export const PROJECTS: Project[] = [
	{
		name: 'Tech Blog',
		description: {
			ko: 'AI 시스템, 웹 엔지니어링, 인프라 설계를 깊이 있게 다루는 기술 블로그.',
			en: 'A technical blog on AI systems, web engineering and infrastructure design.',
		},
		url: 'https://lleg.dev/',
		featured: true,
	},
	{
		name: 'Pickleball',
		description: {
			ko: '피클볼 샷과 기술을 상황별·레벨별로 정리한 영상 기반 학습 사이트.',
			en: 'Video-based drills for pickleball shots, sorted by situation and skill level.',
		},
		url: 'https://pickleball-livid.vercel.app/',
		tags: ['pickleball'],
		group: 'learning',
	},
	{
		name: 'Hoops Handbook',
		description: {
			ko: '기본기부터 전략까지 농구 기술을 카테고리별로 모으고, 기술마다 핵심 설명과 영상 하나를 붙인 학습 사이트.',
			en: 'Basketball skills grouped by category, each with a short explanation and one hand-picked video.',
		},
		url: 'https://sehyunnoh.github.io/basketball/#/',
		tags: ['basketball'],
		group: 'learning',
	},
	{
		name: 'Tap Steps',
		description: {
			ko: '탭댄스 스텝 연습을 도와주는 사이트.',
			en: 'A practice aid for tap dance steps.',
		},
		url: 'https://sehyunnoh.github.io/tap-dance/',
		tags: ['tapdance'],
		group: 'learning',
	},
	{
		name: 'Games',
		description: {
			ko: '곱셈·나눗셈 연산과 악보 읽기를 연습하는 교육용 미니게임 모음.',
			en: 'Small educational games for practising multiplication, division and sight-reading.',
		},
		url: 'https://sehyunnoh.github.io/games/',
		group: 'learning',
	},
	{
		name: 'Acorn',
		description: {
			ko: '지금은 볼 시간이 없는 페이지를 버튼 하나로 담아두고, 여유 있을 때 꺼내 보는 나중에 읽기 서비스.',
			en: 'A read-it-later service: stash a page with one button, come back to it when you have time.',
		},
		url: 'https://acorn-liard.vercel.app/',
		group: 'tools',
	},
	{
		name: 'Homeboard',
		description: {
			ko: '자주 가는 사이트를 주제별 폴더로 정리하는 개인 북마크 대시보드.',
			en: 'A personal bookmark dashboard that files the sites you visit into topic folders.',
		},
		url: 'https://sehyunnoh.github.io/homeboard/',
		group: 'tools',
	},
	{
		name: 'Reminder',
		description: {
			ko: '주기적으로 교체하고 갱신해야 하는 것들을 제때 알려주는 리마인더 서비스.',
			en: 'Reminders for the things that need replacing or renewing on a schedule.',
		},
		url: 'https://reminder-sandy-two.vercel.app/',
		group: 'tools',
	},
];
