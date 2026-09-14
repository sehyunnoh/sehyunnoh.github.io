import rss from '@astrojs/rss';
import { SITE_TITLE } from '../../consts';
import { getPostsFor, postUrl } from '../../i18n/utils';

export async function GET(context) {
	const posts = await getPostsFor('en');
	return rss({
		title: SITE_TITLE,
		description: 'Notes on building things, and on the hobbies in between.',
		site: context.site,
		items: posts.map((post) => ({
			...post.entry.data,
			link: postUrl(post, 'en'),
		})),
	});
}
