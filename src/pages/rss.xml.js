import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const diaryPosts = await getCollection('diary');
	const hobbyPosts = await getCollection('hobby');

	const allPosts = [...diaryPosts, ...hobbyPosts].sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allPosts.map((post) => {
			const parts = post.id.split('/');
			const collection = diaryPosts.includes(post) ? 'diary' : 'hobby';
			return {
				...post.data,
				link: `/${collection}/${parts[0]}/${parts.slice(1).join('/')}/`,
			};
		}),
	});
}
