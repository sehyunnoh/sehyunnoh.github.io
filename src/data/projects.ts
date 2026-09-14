// 새 프로젝트를 추가하려면 이 배열에 항목을 하나 추가하면 됩니다.
// 배열 순서대로 카드가 표시됩니다. description은 언어별로 적습니다.
import type { Locale } from '../i18n/config';

export interface Project {
	name: string;
	description: Record<Locale, string>;
	url: string;
	tags?: string[];
}

export const PROJECTS: Project[] = [
	{
		name: 'Tech Blog',
		description: {
			ko: 'AI 시스템, 웹 엔지니어링, 인프라 설계를 깊이 있게 다루는 기술 블로그.',
			en: 'A technical blog on AI systems, web engineering and infrastructure design.',
		},
		url: 'https://lleg.dev/',
	},
	{
		name: 'Pickleball',
		description: {
			ko: '피클볼 샷과 기술을 상황별·레벨별로 정리한 영상 기반 학습 사이트.',
			en: 'Video-based drills for pickleball shots, sorted by situation and skill level.',
		},
		url: 'https://pickleball-livid.vercel.app/',
		tags: ['pickleball'],
	},
	{
		name: 'Reminder',
		description: {
			ko: '주기적으로 교체하고 갱신해야 하는 것들을 제때 알려주는 리마인더 서비스.',
			en: 'Reminders for the things that need replacing or renewing on a schedule.',
		},
		url: 'https://reminder-sandy-two.vercel.app/',
	},
	{
		name: 'Acorn',
		description: {
			ko: 'Acorn 웹 서비스.',
			en: 'The Acorn web service.',
		},
		url: 'https://acorn-liard.vercel.app/',
	},
	{
		name: 'Tap Steps',
		description: {
			ko: '탭댄스 스텝 연습을 도와주는 사이트.',
			en: 'A practice aid for tap dance steps.',
		},
		url: 'https://sehyunnoh.github.io/tap-dance/',
		tags: ['tapdance'],
	},
	{
		name: 'Homeboard',
		description: {
			ko: '자주 가는 사이트를 주제별 폴더로 정리하는 개인 북마크 대시보드.',
			en: 'A personal bookmark dashboard that files the sites you visit into topic folders.',
		},
		url: 'https://sehyunnoh.github.io/homeboard/',
	},
	{
		name: 'Games',
		description: {
			ko: '곱셈·나눗셈 연산과 악보 읽기를 연습하는 교육용 미니게임 모음.',
			en: 'Small educational games for practising multiplication, division and sight-reading.',
		},
		url: 'https://sehyunnoh.github.io/games/',
	},
	{
		name: 'Hoops Handbook',
		description: {
			ko: '기본기부터 전략까지 농구 기술을 카테고리별로 모으고, 기술마다 핵심 설명과 영상 하나를 붙인 학습 사이트.',
			en: 'Basketball skills grouped by category, each with a short explanation and one hand-picked video.',
		},
		url: 'https://sehyunnoh.github.io/basketball/#/',
		tags: ['basketball'],
	},
];
