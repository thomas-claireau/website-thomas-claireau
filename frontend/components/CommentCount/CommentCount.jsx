import PropTypes from 'prop-types';

import style from './CommentCount.module.scss';
import CommentSVG from 'public/assets/img/comment.svg';
import { useEffect, useState } from 'react';

export default function CommentCount({ direction }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(0); // api here
	}, []);

	return (
		<div className={`${style['comment-count']} ${style[direction]}`}>
			{count !== 0 && <span>{count < 100 ? count : '99+'}</span>}
			<CommentSVG />
		</div>
	);
}

CommentCount.propTypes = {
	direction: PropTypes.string.isRequired,
};
