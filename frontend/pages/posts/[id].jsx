import Head from 'next/head';
import Container from '../../components/Container/Container';
import Layout from '../../components/Layout/Layout';

import style from './post.module.scss';

export default function Post({ post }) {
	return (
		<Layout>
			<Head>
				<title>{post.title} - Thomas Claireau, développeur web</title>
			</Head>
			<Container className={style['post']}></Container>
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
	const posts = await res.json();

	const paths = posts.map((post) => {
		return { params: { id: post.id.toString() } };
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${params.id}`
	);
	const post = await res.json();

	return { props: { post } };
}
