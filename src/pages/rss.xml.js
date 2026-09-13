import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const allPosts = (
		await Promise.all(['diary', 'hobby', 'family'].map((c) => getCollection(c)))
	).flat();

	allPosts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allPosts.map((post) => {
			const parts = post.id.split('/');
			return {
				...post.data,
				link: `/${post.collection}/${parts[0]}/${parts.slice(1).join('/')}/`,
			};
		}),
	});
}
