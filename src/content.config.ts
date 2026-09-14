import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const postSchema = ({ image }: { image: () => z.ZodType }) =>
	z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.optional(image()),
		tags: z.array(z.string()).optional().default([]),
	});

/**
 * 기본 id 생성기는 파일명을 슬러그로 만들면서 점을 지워버린다.
 * 그러면 'post.en.md'가 'posten'이 되어 언어 접미사를 못 읽는다.
 * 확장자만 떼고 경로를 그대로 쓴다.
 */
const idFromPath = ({ entry }: { entry: string }) => entry.replace(/\.(md|mdx)$/, '');

const diary = defineCollection({
	loader: glob({ base: './src/content/diary', pattern: '**/*.{md,mdx}', generateId: idFromPath }),
	schema: postSchema,
});

const hobby = defineCollection({
	loader: glob({ base: './src/content/hobby', pattern: '**/*.{md,mdx}', generateId: idFromPath }),
	schema: postSchema,
});

const family = defineCollection({
	loader: glob({ base: './src/content/family', pattern: '**/*.{md,mdx}', generateId: idFromPath }),
	schema: postSchema,
});

export const collections = { diary, hobby, family };
