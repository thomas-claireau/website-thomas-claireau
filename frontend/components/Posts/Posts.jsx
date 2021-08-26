import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import style from './Posts.module.scss';

import Post from '../Post/Post';

export default function Posts({ className, layout, items, nbStarterPosts }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (items) {
			if (nbStarterPosts) {
				setPosts(items.slice(0, nbStarterPosts));
			} else {
				setPosts(items);
			}
		}
	}, []);

	if (!items.length) return <div>Chargement</div>;

	async function fetchData(e) {
		setTimeout(async () => {
			const morePosts = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/posts?limit=${
					posts.length + nbStarterPosts
				}`
			);

			setPosts(morePosts);
		}, 1400);
	}

	return nbStarterPosts ? (
		<InfiniteScroll
			dataLength={posts.length}
			next={fetchData}
			hasMore={true}
			className={`${className} ${style['posts']} ${style[layout]}`}
		>
			{posts.map((post, index) => (
				<Post key={index} index={index} layout={layout} item={post} />
			))}
		</InfiniteScroll>
	) : (
		<div className={`${className} ${style['posts']} ${style[layout]}`}>
			{posts.map((post, index) => (
				<Post key={index} index={index} layout={layout} item={post} />
			))}
		</div>
	);
}

Posts.propTypes = {
	className: PropTypes.string,
	layout: PropTypes.string,
	items: PropTypes.array.isRequired,
};
