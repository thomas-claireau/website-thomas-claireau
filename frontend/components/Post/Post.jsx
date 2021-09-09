import PropTypes from 'prop-types';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import Author from '../Author/Author';

import style from './Post.module.scss';
import stylePosts from '../Posts/Posts.module.scss';
import FantomImage from '../FantomImage/FantomImage';

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
					className={`post ${style['post']} ${
						layout == 'full' && index % 6 == 0 ? stylePosts['large'] : ''
					}`}
					ref={$el}
				>
					<FantomImage
						className={`${style['thumbnail']} ${stylePosts['thumbnail']}`}
						src={item.thumbnail.url}
						alt={item.thumbnail.alt}
						layout="fill"
					/>
					<div className={style['content']}>
						<span className={style['categories']}>
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
