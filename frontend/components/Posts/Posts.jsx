import PropTypes from 'prop-types';
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
			const morePosts = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/posts?limit=${
					posts.length + nbStarterPosts
				}`
			);

			setPosts(await morePosts.json());
		}, 1400);
	}

	const Tag = nbStarterPosts ? InfiniteScroll : 'div';

	return (
		<Tag
			dataLength={posts.length}
			next={fetchData}
			hasMore={true}
			className={`${className} ${style['posts']} ${style[layout]}`}
		>
			{posts.map((post, index) => (
				<Post key={index} index={index} layout={layout} item={post} />
			))}
		</Tag>
	);
}

Posts.propTypes = {
	className: PropTypes.string,
	layout: PropTypes.string,
	items: PropTypes.array.isRequired,
};
