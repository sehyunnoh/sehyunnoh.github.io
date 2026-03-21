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

const diary = defineCollection({
	loader: glob({ base: './src/content/diary', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

const hobby = defineCollection({
	loader: glob({ base: './src/content/hobby', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

export const collections = { diary, hobby };
