import PropTypes from 'prop-types';
import moment from 'moment';

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

export default function Post({ index, item, layout }) {
	if (!item) return <div>Chargement</div>;

	return (
		<article
			className={`${post} ${
				layout == 'full' && index % 6 == 0 ? stylePosts['large'] : ''
			}`}
		>
			<div className={`${thumbnail} ${stylePosts['thumbnail']}`}>
				<img src={item.thumbnail} alt="" />
			</div>
			<div className={content}>
				<span className={tags}>Javascript, PHP</span>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<div className={author}>
					<div className={avatar}>
						<img src={item.User.avatar} alt="" />
					</div>
					<div className={infos}>
						<h4>
							{item.User.firstname} {item.User.lastname}
						</h4>
						<div>
							<span className={date}>
								{moment(item.updatedAt).format('D MMMM YYYY')}
							</span>
							<span className={time}>2 min read</span>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

Post.propTypes = {
	index: PropTypes.number.isRequired,
	item: PropTypes.object.isRequired,
	layout: PropTypes.string,
};
