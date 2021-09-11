import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import style from './Like.module.scss';

export default function Like({ direction, onClick }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(10); // api here
	}, []);

	return (
		<div className={`${style['like']} ${style[direction]}`} onClick={onClick}>
			{count !== 0 && <span>{count < 100 ? count : '99+'}</span>}
			<ReactSVG src="/assets/img/heart.svg" alt="like" />
		</div>
	);
}

Like.propTypes = {
	direction: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
