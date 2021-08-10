import PropTypes from 'prop-types';

import style from './SocialProof.module.scss';
import Like from '../Like/Like';
import CommentCount from '../CommentCount/CommentCount';

export default function SocialProof({ direction, onClick }) {
	return (
		<div className={`${style['social-proof']} ${style[direction]}`}>
			<Like direction={direction} onClick={onClick} />
			<CommentCount direction={direction} onClick={onClick} />
		</div>
	);
}

SocialProof.propTypes = {
	direction: PropTypes.string.isRequired,
};
