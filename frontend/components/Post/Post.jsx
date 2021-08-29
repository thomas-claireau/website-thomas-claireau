import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

import { post, thumbnail, content, categories } from './Post.module.scss';
import stylePosts from '../Posts/Posts.module.scss';
import Author from '../Author/Author';
import { useEffect, useRef } from 'react';

export default function Post({ index, item, layout, last }) {
	if (!item) return <div>Chargement</div>;

	const $el = useRef(null);
	const vpWidth = process.env.NEXT_PUBLIC_VP_WIDTH || 1280;

	useEffect(() => {
		// fix bug post large in the end of infinite scroll
		if (
			last &&
			$el.current.clientWidth == vpWidth &&
			!$el.current.classList.contains(stylePosts['large'])
		) {
			$el.current.classList.add(stylePosts['large']);
		}
	}, []);

	return (
		item.title &&
		item.thumbnail.url && (
			<Link href={`/post/${item.slug}`}>
				<a
					className={`post ${post} ${
						layout == 'full' && index % 6 == 0 ? stylePosts['large'] : ''
					}`}
					ref={$el}
				>
					<div className={`${thumbnail} ${stylePosts['thumbnail']}`}>
						<Image
							src={item.thumbnail.url}
							alt={item.thumbnail.alt}
							layout="fill"
						/>
					</div>
					<div className={content}>
						<span className={categories}>
							{item.categories.join(', ')}
						</span>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
						<Author post={item} />
					</div>
				</a>
			</Link>
		)
	);
}

Post.propTypes = {
	index: PropTypes.number.isRequired,
	item: PropTypes.object.isRequired,
	layout: PropTypes.string,
};
