import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import CustomErrorPage from 'pages/404';
import { request } from 'graphql-request';
import POST_QUERY from 'graphql-queries/post';

import { post, left, right, back, content } from 'styles/pages/post.module.scss';

import Col from 'components/global/layout/Col/index';
import Sidebar from 'components/global/Sidebar/index';

import ArrowRightSvg from 'public/assets/img/arrow_right.svg';

function Post({ data }) {
	if (!data) return <CustomErrorPage />;

	const SEO = {
		title: data.header.meta_title,
		description: data.header.meta_description,
		openGraph: {
			title: data.header.meta_title,
			description: data.header.meta_description,
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
