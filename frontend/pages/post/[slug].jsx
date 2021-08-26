import Head from 'next/head';

import Container from '../../components/Container/Container';
import Layout from '../../components/Layout/Layout';
import SocialShare from '../../components/SocialShare/SocialShare';
import Author from '../../components/Author/Author';
import HtmlContent from '../../components/HtmlContent/HtmlContent';
import SocialProof from '../../components/SocialProof/SocialProof';
import Sidebar from '../../components/Sidebar/Sidebar';
import Posts from '../../components/Posts/Posts';

import style from './post.module.scss';
import axios from 'axios';

export default function Post({ post }) {
	return (
		<Layout>
			<Head>
				<title>{post.title} - Thomas Claireau, développeur web</title>
			</Head>
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
						<SocialProof direction="horizontal" />
					</div>
				</div>
				{post.thumbnail.url && (
					<img
						className={style['thumbnail']}
						src={post.thumbnail.url}
						alt={post.thumbnail.alt}
					/>
				)}
				<Sidebar />
				<HtmlContent id="content" className={style['html-content']}>
					{post.content}
				</HtmlContent>
				{post.related_posts && (
					<Posts items={post.related_posts} className={style['posts']} />
				)}
			</Container>
		</Layout>
	);
}

export async function getStaticPaths() {
	const posts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);

	const paths = posts.data.map((post) => {
		return { params: { slug: post.slug } };
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const posts = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${params.slug}`
	);

	return { props: { post: posts.data[0] } };
}
