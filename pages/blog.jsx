import React from 'react';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import BLOG_QUERY from 'apollo/queries/blog';

import styles, { blog } from 'styles/pages/blog.module.scss';

import { Loading } from 'components/global/Loading/index';
import { Error } from 'components/global/Error/index';
import Container from 'components/global/layout/Container/index';
import Menu from 'components/global/menus/Menu/index';
import Slider from 'components/posts/Slider/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';

function Blog() {
	const { data, loading, error } = useQuery(BLOG_QUERY);

	// console.log(data);

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

	const SEO = {
		title: data.blog.header.meta_title,
		description: data.blog.header.meta_description,
		openGraph: {
			title: data.blog.header.meta_title,
			description: data.blog.header.meta_description,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<section className={blog}>
				<Container>
					<h1 className="--hide">Thomas Claireau - {data.blog.header.title}</h1>
					<Slider posts={data.posts} />
					<Menu view="desktop" />
				</Container>
				<MenuBottom></MenuBottom>
			</section>
		</>
	);
}

export default withApollo({ ssr: true })(Blog);
