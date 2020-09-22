import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomErrorPage from 'pages/404';
import { request } from 'graphql-request';
import POST_QUERY from 'graphql-queries/post';
import { ArticleJsonLd } from 'next-seo';
import { motion } from 'framer-motion';

import styles, { post, left, right, back, content } from 'styles/pages/post.module.scss';

import Col from 'components/global/layout/Col/index';
import Sidebar from 'components/global/Sidebar/index';
import HtmlContent from 'components/global/HtmlContent/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';
import GlobalSeo from 'components/global/GlobalSeo';

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

	const globalTransition = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const transitionItem = {
		hidden: { opacity: 0, y: '30%' },
		visible: { opacity: 1, y: 0 },
	};

	const additionnalOpenGraph = {
		type: 'article',
		article: {
			publishedTime: data.created_at,
			modifiedTime: data.updated_at,
			authors: ['Thomas Claireau'],
			tags: hashtags,
		},
	};

	return (
		<>
			<GlobalSeo data={data} additionnalOpenGraph={additionnalOpenGraph} />
			<motion.section
				className={`${post} post main-content`}
				variants={globalTransition}
				initial="hidden"
				animate="visible"
			>
				<Col
					className={left}
					direction="left"
					align="flex-start"
					justify="flex-start"
					width="35%"
				>
					<motion.div variants={transitionItem}>
						<Sidebar data={data} view="post"></Sidebar>
					</motion.div>
				</Col>
				<Col
					className={right}
					direction="right"
					align="-start"
					justify="flex-start"
					scroll
					width="65%"
				>
					<Link href="/blog">
						<a className={`${back} ${content}`}>
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
					<motion.img
						variants={transitionItem}
						className={`${styles['main-image']} ${content}`}
						src={data.header.main_image.url}
						alt={data.header.main_image.alt}
						title={data.header.title}
					/>
					<motion.div variants={transitionItem}>
						<HtmlContent className={`${content}`}>{data.content}</HtmlContent>
					</motion.div>
				</Col>
				<MenuBottom></MenuBottom>
			</motion.section>
			<ArticleJsonLd
				url={url}
				title={data.header.meta_title}
				images={[data.header.main_image.url]}
				datePublished={data.created_at}
				dateModified={data.updated_at}
				authorName={`${data.header.user.username} ${data.header.user.name}`}
				publisherName={`${data.header.user.username} ${data.header.user.name}`}
				publisherLogo={data.header.user.avatar.url}
				description={data.header.meta_description}
			/>
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
