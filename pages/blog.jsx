import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import BLOG_QUERY from 'apollo/queries/blog';

import styles, { blog, container } from 'styles/pages/blog.module.scss';

import { Loading } from 'components/global/Loading/index';
import { Error } from 'components/global/Error/index';
import Container from 'components/global/layout/Container/index';
import Menu from 'components/global/menus/Menu/index';
import Slider from 'components/posts/Slider/index';
import SearchBar from 'components/posts/SearchBar/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';

function Blog() {
	const [search, setSearch] = useState(null);
	const [posts, setPosts] = useState(null);

	const { data, loading, error } = useQuery(BLOG_QUERY);

	useEffect(() => {
		if (data) setPosts(data.posts);
	}, [data]);

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

	function handlePress(input) {
		if (search !== input) filterPosts(input);
	}

	function handleClick(input) {
		if (search !== input) filterPosts(input);
	}

	function filterPosts(input) {
		setSearch(input);

		const filterPosts = data.posts.filter((item) => {
			const title = item.header.title;

			if (title.toLowerCase().includes(input.toLowerCase())) return item;
		});

		if (filterPosts.length > 0) {
			setPosts(filterPosts);
		} else {
			setPosts(data.posts);
		}
	}

	return (
		posts && (
			<>
				<NextSeo {...SEO} />
				<section className={blog}>
					<Container className={container}>
						<h1 className="--hide">Thomas Claireau - {data.blog.header.title}</h1>
						<SearchBar handlePress={handlePress} handleClick={handleClick} />
						<Slider data={posts} />
						<Menu view="desktop" />
					</Container>
					<MenuBottom></MenuBottom>
				</section>
			</>
		)
	);
}

export default withApollo({ ssr: true })(Blog);
