import axios from 'axios';
import { BlogJsonLd, NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import Container from '../components/Container/Container';
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import style from './blog.module.scss';

const NB_STARTER_POSTS = 10;

export default function Blog({ fields, posts, global }) {
	const { seo } = fields;

	return (
		<Layout>
			<NextSeo
				title={`${seo.title} - ${global.seo.site_name}`}
				description={seo.description}
			/>
			<BlogJsonLd
				url={seo.canonical}
				title={`${seo.title} - ${global.seo.site_name}`}
				images={posts.map((post) => post.thumbnail.url)}
				datePublished={fields.created_at}
				dateModified={fields.updated_at}
				authorName={seo.author_name}
				description={seo.description}
			/>
			<SocialProfileJsonLd
				type="Person"
				name="Thomas Claireau"
				url={global.seo.home_url}
				sameAs={global.header.menus.items.map((item) => item.url)}
			/>
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
	fields: PropTypes.object,
	posts: PropTypes.array.isRequired,
	global: PropTypes.object,
};

export async function getServerSideProps() {
	const auth = {
		auth: {
			username: process.env.NEXT_PUBLIC_API_USERNAME,
			password: process.env.NEXT_PUBLIC_API_PASSWORD,
		},
	};

	const fields = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/pages?post_id=23`,
		auth
	);

	const posts = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/posts`,
		auth
	);
	const global = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/global`,
		auth
	);

	return {
		props: { fields: fields.data, posts: posts.data, global: global.data },
	};
}
