import Image from 'next/image';
import PropTypes from 'prop-types';

import style from './Loader.module.scss';

export default function Loader({ last }) {
	return (
		!last && (
			<div className={style['loader']}>
				<Image src="/assets/img/loader.png" width={25} height={25} />
			</div>
		)
	);
}

Loader.propTypes = {
	last: PropTypes.bool.isRequired,
};
