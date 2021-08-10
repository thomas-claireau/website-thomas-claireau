import PropTypes from 'prop-types';

import style from './Like.module.scss';
import LikeSVG from 'public/assets/img/heart.svg';
import { useEffect, useState } from 'react';

export default function Like({ direction, onClick }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(10); // api here
	}, []);

	return (
		<div className={`${style['like']} ${style[direction]}`} onClick={onClick}>
			{count !== 0 && <span>{count < 100 ? count : '99+'}</span>}
			<LikeSVG />
		</div>
	);
}

Like.propTypes = {
	direction: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
