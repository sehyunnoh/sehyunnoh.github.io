import { getCollection } from 'astro:content';
import { DEFAULT_LOCALE, LOCALES, type Locale } from './config';

export const COLLECTIONS = ['diary', 'hobby', 'family'] as const;
export type CollectionName = (typeof COLLECTIONS)[number];

/**
 * 라우트 파라미터 <-> locale.
 * 기본 언어는 접두사가 없으므로 param이 undefined다.
 */
export function localeToParam(locale: Locale): string | undefined {
	return locale === DEFAULT_LOCALE ? undefined : locale;
}

export function paramToLocale(param?: string): Locale {
	return (LOCALES as readonly string[]).includes(param ?? '') ? (param as Locale) : DEFAULT_LOCALE;
}

/** '/en' 또는 '' — 링크 앞에 붙이는 접두사 */
export function localePrefix(locale: Locale): string {
	return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

/**
 * 글의 언어와 번역 짝은 파일명으로 정한다.
 *   dev/my-post      -> ko, key 'dev/my-post'
 *   dev/my-post.en   -> en, key 'dev/my-post'
 * 프론트매터에 언어를 적지 않으므로 깜빡해서 틀어질 일이 없다.
 */
export function parsePostId(id: string): { key: string; locale: Locale } {
	for (const locale of LOCALES) {
		if (locale === DEFAULT_LOCALE) continue;
		if (id.endsWith(`.${locale}`)) {
			return { key: id.slice(0, -(locale.length + 1)), locale };
		}
	}
	return { key: id, locale: DEFAULT_LOCALE };
}

export type LocalizedPost = {
	/** 해당 언어로 실제 보여줄 엔트리 (번역이 없으면 기본 언어 엔트리) */
	entry: Awaited<ReturnType<typeof getCollection>>[number];
	collection: CollectionName;
	/** 'dev/my-post' — 언어 접미사를 뗀 식별자 */
	key: string;
	/** 카테고리 뒤 슬러그. URL의 마지막 조각 */
	slug: string;
	category: string;
	/** 요청한 언어의 번역이 실제로 존재하는가 */
	translated: boolean;
};

/**
 * 한 언어에서 보여줄 글 목록.
 * 번역이 없는 글은 빼지 않고 기본 언어 내용으로 채운다 — 영어 목록이 비면 죽은 사이트로 보인다.
 */
export async function getPostsFor(locale: Locale): Promise<LocalizedPost[]> {
	const out: LocalizedPost[] = [];

	for (const collection of COLLECTIONS) {
		const entries = await getCollection(collection);
		const byKey = new Map<string, Partial<Record<Locale, (typeof entries)[number]>>>();

		for (const entry of entries) {
			const { key, locale: entryLocale } = parsePostId(entry.id);
			const slot = byKey.get(key) ?? {};
			slot[entryLocale] = entry;
			byKey.set(key, slot);
		}

		for (const [key, slot] of byKey) {
			const wanted = slot[locale];
			const entry = wanted ?? slot[DEFAULT_LOCALE];
			// 기본 언어판 없이 번역만 있는 경우는 만들지 않는다
			if (!entry) continue;
			const parts = key.split('/');
			out.push({
				entry,
				collection,
				key,
				category: parts[0],
				slug: parts.slice(1).join('/'),
				translated: Boolean(wanted),
			});
		}
	}

	return out.sort((a, b) => b.entry.data.pubDate.valueOf() - a.entry.data.pubDate.valueOf());
}

/** 글 URL. 언어 접두사 + 컬렉션 + 카테고리 + 슬러그 */
export function postUrl(post: LocalizedPost, locale: Locale): string {
	return `${localePrefix(locale)}/${post.collection}/${post.category}/${post.slug}/`;
}
