import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

import { post, thumbnail, content, categories } from './Post.module.scss';
import stylePosts from '../Posts/Posts.module.scss';
import Author from '../Author/Author';

export default function Post({ index, item, layout }) {
	if (!item) return <div>Chargement</div>;

	return (
		item.title &&
		item.thumbnail.url && (
			<Link href={`/post/${item.slug}`}>
				<a
					className={`${post} ${
						layout == 'full' && index % 6 == 0 ? stylePosts['large'] : ''
					}`}
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
						<h3>{item.tit$e}</h3>
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
