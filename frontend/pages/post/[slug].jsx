import axios from 'axios';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Author from '../../components/Author/Author';
import Container from '../../components/Container/Container';
import FantomImage from '../../components/FantomImage/FantomImage';
import HtmlContent from '../../components/HtmlContent/HtmlContent';
import Layout from '../../components/Layout/Layout';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import SocialShare from '../../components/SocialShare/SocialShare';
import style from './post.module.scss';

export default function Post({ post }) {
	return (
		<Layout>
			<Head>
				<title>{post.title} - Thomas Claireau, développeur web</title>
			</Head>
			<NextSeo title="" />
			<Container className={style['post']}>
				<div className={style['header']}>
					{post.categories && (
						<span className={style['categories']}>
							{post.categories.join(', ')}
						</span>
					)}
					<div className={style['top']}>
						<h1>{post.title}</h1>
						<SocialShare direction="horizontal" id={post.id} />
					</div>
					<span className={style['description']}>{post.description}</span>
					<span className={style['separator']}></span>
					<div className={style['bottom']}>
						<Author className={style['author']} post={post} />
						{/* <SocialProof direction="horizontal" /> */}
					</div>
				</div>
				{post.thumbnail.url && (
					<FantomImage
						className={style['thumbnail']}
						src={post.thumbnail.url}
						alt={post.thumbnail.alt}
						width={Number(process.env.NEXT_PUBLIC_VP_WIDTH) || 1280}
						height={720}
						layout="responsive"
					/>
				)}
				<div className={style['content']}>
					<Sidebar />
					<HtmlContent className={style['html-content']}>
						{post.content}
					</HtmlContent>
				</div>
				{post.related_posts && (
					<Posts items={post.related_posts} className={style['posts']} />
				)}
			</Container>
		</Layout>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
};

export async function getServerSideProps(context) {
	const { slug } = context.query;

	const auth = {
		auth: {
			username: process.env.NEXT_PUBLIC_API_USERNAME,
			password: process.env.NEXT_PUBLIC_API_PASSWORD,
		},
	};

	const posts = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${slug}`,
		auth
	);

	const global = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/global`,
		auth
	);

	return { props: { post: posts.data[0], global: global.data } };
}
