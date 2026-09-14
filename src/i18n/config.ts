export const LOCALES = ['ko', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ko';

/** 기본 언어는 URL에 접두사를 붙이지 않는다. 기존 한국어 주소가 그대로 유지된다. */
export const LOCALE_LABELS: Record<Locale, string> = {
	ko: 'KO',
	en: 'EN',
};
