import PropTypes from 'prop-types';
import style, { posts } from './Posts.module.scss';

import Post from '../Post/Post';

export default function Posts({ className, layout, items }) {
	return (
		<div className={`${className} ${posts} ${style[layout]}`}>
			{items.length &&
				items.map((post, index) => (
					<Post key={index} layout={layout} item={post} />
				))}
		</div>
	);
}

Posts.propTypes = {
	className: PropTypes.string,
	layout: PropTypes.string,
	items: PropTypes.array.isRequired,
};
