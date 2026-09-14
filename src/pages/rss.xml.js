import rss from '@astrojs/rss';
import { SITE_TITLE } from '../consts';
import { getPostsFor, postUrl } from '../i18n/utils';

export async function GET(context) {
	const posts = await getPostsFor('ko');
	return rss({
		title: SITE_TITLE,
		description: '개발일기와 취미 활동을 기록하는 공간입니다.',
		site: context.site,
		items: posts.map((post) => ({
			...post.entry.data,
			link: postUrl(post, 'ko'),
		})),
	});
}
