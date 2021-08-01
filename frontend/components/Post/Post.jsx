import PropTypes from 'prop-types';

import {
	post,
	thumbnail,
	content,
	author,
	infos,
	tags,
	avatar,
	date,
	time,
} from './Post.module.scss';
import stylePosts from '../Posts/Posts.module.scss';

export default function Post({ item, layout }) {
	const counter = 0;

	return (
		<article
			className={`${post} ${
				layout == 'full' && counter % 6 == 0 ? stylePosts['large'] : ''
			}`}
		>
			<div className={`${thumbnail} ${stylePosts['thumbnail']}`}>
				<img src="https://picsum.photos/1920/1080" alt="" />
			</div>
			<div className={content}>
				<span className={tags}>Javascript, PHP</span>
				<h3>Créer un site Wordpress Headless de zéro</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
					nulla, beatae maxime, quo fugiat sapiente et veniam ducimus
					magnam culpa omnis natus voluptatem possimus
				</p>
				<div className={author}>
					<div className={avatar}>
						<img src="/assets/img/memoji.png" alt="" />
					</div>
					<div className={infos}>
						<h4>Thomas Claireau</h4>
						<div>
							<span className={date}>17 Juin 2021</span>
							<span className={time}>2 min read</span>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

Post.propTypes = {
	item: PropTypes.array.isRequired,
	layout: PropTypes.string,
};
