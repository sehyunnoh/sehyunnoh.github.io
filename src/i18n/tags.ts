import type { Locale } from './config';

/**
 * 태그는 URL에 쓰이는 슬러그로 저장하고, 화면 표시는 언어별로 고른다.
 * 글 프론트매터에는 왼쪽 슬러그를 적는다.
 */
export const TAGS: Record<string, Record<Locale, string>> = {
	ai: { ko: 'AI', en: 'AI' },
	astro: { ko: 'Astro', en: 'Astro' },
	basketball: { ko: '농구', en: 'Basketball' },
	blog: { ko: '블로그', en: 'Blog' },
	books: { ko: '책', en: 'Books' },
	bun: { ko: 'Bun', en: 'Bun' },
	camping: { ko: '캠핑', en: 'Camping' },
	cardio: { ko: '유산소', en: 'Cardio' },
	daily: { ko: '일상', en: 'Daily Life' },
	dance: { ko: '춤', en: 'Dance' },
	dev: { ko: '개발', en: 'Development' },
	english: { ko: '영어', en: 'English' },
	exercise: { ko: '운동', en: 'Exercise' },
	family: { ko: '가족', en: 'Family' },
	hiking: { ko: '등산', en: 'Hiking' },
	'home-server': { ko: '홈서버', en: 'Home Server' },
	hobby: { ko: '취미', en: 'Hobby' },
	jeju: { ko: '제주도', en: 'Jeju' },
	'jump-rope': { ko: '줄넘기', en: 'Jump Rope' },
	learning: { ko: '학습법', en: 'Learning' },
	memory: { ko: '기억', en: 'Memory' },
	movies: { ko: '영화', en: 'Movies' },
	music: { ko: '음악', en: 'Music' },
	nolan: { ko: '놀란', en: 'Nolan' },
	orca: { ko: 'orca', en: 'orca' },
	piano: { ko: '피아노', en: 'Piano' },
	pickleball: { ko: '피클볼', en: 'Pickleball' },
	programming: { ko: '프로그래밍', en: 'Programming' },
	'racket-sports': { ko: '라켓스포츠', en: 'Racket Sports' },
	reading: { ko: '독서', en: 'Reading' },
	'sci-fi': { ko: 'SF', en: 'Sci-Fi' },
	shadowing: { ko: '섀도잉', en: 'Shadowing' },
	study: { ko: '공부', en: 'Study' },
	tailwind: { ko: 'Tailwind', en: 'Tailwind' },
	'tap-dance': { ko: '탭댄스', en: 'Tap Dance' },
	thoughts: { ko: '생각', en: 'Thoughts' },
	travel: { ko: '여행', en: 'Travel' },
	volleyball: { ko: '배구', en: 'Volleyball' },
};

/** 매핑에 없는 슬러그는 슬러그 자체를 보여준다 — 태그를 새로 써도 페이지가 깨지지 않는다. */
export function tagLabel(slug: string, locale: Locale): string {
	return TAGS[slug]?.[locale] ?? slug;
}
