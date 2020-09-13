import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import BLOG_QUERY from 'apollo/queries/blog';
import { request } from 'graphql-request';

import { blog, container } from 'styles/pages/blog.module.scss';

import Container from 'components/global/layout/Container/index';
import Menu from 'components/global/menus/Menu/index';
import Slider from 'components/posts/Slider/index';
import SearchBar from 'components/posts/SearchBar/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';

function Blog({ data }) {
	const [search, setSearch] = useState(null);
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		if (data) setPosts(data.posts);
	}, [data]);

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

export async function getServerSideProps() {
	return request(process.env.API_URL + '/graphql', BLOG_QUERY).then((data) => {
		return {
			props: {
				data: data || null,
			},
		};
	});
}

export default Blog;
