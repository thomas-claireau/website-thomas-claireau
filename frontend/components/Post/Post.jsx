import PropTypes from 'prop-types';
import Link from 'next/link';

import { post, thumbnail, content, tags } from './Post.module.scss';
import stylePosts from '../Posts/Posts.module.scss';
import Author from '../Author/Author';

export default function Post({ index, item, layout }) {
	if (!item) return <div>Chargement</div>;

	return (
		item.title &&
		item.thumbnail.url && (
			<Link href={`/posts/${item.id}`}>
				<a
					className={`${post} ${
						layout == 'full' && index % 6 == 0 ? stylePosts['large'] : ''
					}`}
				>
					<div className={`${thumbnail} ${stylePosts['thumbnail']}`}>
						<img src={item.thumbnail.url} alt={item.thumbnail.alt} />
					</div>
					<div className={content}>
						<span className={tags}>Javascript, PHP</span>
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
