import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import CustomErrorPage from 'pages/404';
import { request } from 'graphql-request';
import POST_QUERY from 'graphql-queries/post';

import { post, left, right, back, content } from 'styles/pages/post.module.scss';

import Col from 'components/global/layout/Col/index';
import Sidebar from 'components/global/Sidebar/index';

import ArrowRightSvg from 'public/assets/img/arrow_right.svg';

function setShareButton(url, title, hashtags) {
	return [
		{
			id: 2,
			label: 'linkedin',
			url: encodeURIComponent(`https://www.linkedin.com/sharing/share-offsite?url=${url}`),
		},
		{
			id: 1,
			label: 'facebook',
			url: encodeURIComponent(`https://www.facebook.com/share.php?u=${url}`),
		},
		{
			id: 3,
			label: 'twitter',
			url: encodeURIComponent(
				`https://twitter.com/intent/tweet?text=Awesome post ;)&url=${url}&hashtags=${hashtags.join(
					','
				)}`
			),
		},
	];
}

function Post({ data }) {
	if (!data) return <CustomErrorPage />;

	const router = useRouter();
	const url = process.env.FRONT_URL + router.asPath;
	const hashtags = data.technologies.map((item) => item.technologie);
	data.share = setShareButton(url, data.header.meta_title, hashtags);

	const SEO = {
		title: data.header.meta_title,
		description: data.header.meta_description,
		openGraph: {
			title: data.header.meta_title,
			description: data.header.meta_description,
			images: [
				{
					url: data.main_image.url,
					width: 1920,
					height: 1080,
					alt: data.main_image.caption,
				},
			],
			url,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<section className={`${post} post main-content`}>
				<Col
					className={left}
					direction="left"
					align="flex-start"
					justify="flex-start"
					width="35%"
				>
					<Sidebar data={data} view="post"></Sidebar>
				</Col>
				<Col
					className={right}
					direction="right"
					align="flex-start"
					justify="flex-start"
					scroll
					width="65%"
				>
					<Link href="/projets">
						<a className={`${back} ${content}`}>
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
				</Col>
			</section>
		</>
	);
}

export async function getServerSideProps({ params }) {
	const variables = { slug: params.slug };

	return request(process.env.API_URL + '/graphql', POST_QUERY, variables).then((data) => {
		const post = data.posts[0];

		return {
			props: {
				data: post || null,
			},
		};
	});
}

export default Post;

/**
 * https://www.facebook.com/sharer/sharer.php?u=URL
 * https://www.linkedin.com/sharing/share-offsite/?url=URL
 * http://twitter.com/share?text=TEXT&url=URL&hashtags=HASHTAG_1,HASHTAG_2
 */
