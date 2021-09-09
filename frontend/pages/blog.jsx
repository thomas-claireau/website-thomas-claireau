import axios from 'axios';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';

import style from './blog.module.scss';

const NB_STARTER_POSTS = 10;

export default function Blog({ posts }) {
	return (
		<Layout>
			<Head>
				<title>Blog - Thomas Claireau, développeur web</title>
			</Head>
			<Container className={style['blog']}>
				{/* <div className={style['search-bar']}>
					<input type="text" />
					<Button
						className={style['cta']}
						icon={<i className="fas fa-search"></i>}
						text=""
						url="#"
						type="cta"
					/>
				</div> */}
				<Posts
					layout="full"
					items={posts}
					nbStarterPosts={NB_STARTER_POSTS}
				/>
			</Container>
		</Layout>
	);
}

Blog.propTypes = {
	posts: PropTypes.array.isRequired,
};

export async function getStaticProps() {
	const auth = {
		auth: {
			username: process.env.NEXT_PUBLIC_API_USERNAME,
			password: process.env.NEXT_PUBLIC_API_PASSWORD,
		},
	};

	const posts = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/posts`,
		auth
	);
	const global = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/global`,
		auth
	);

	return { props: { posts: posts.data, global: global.data } };
}
