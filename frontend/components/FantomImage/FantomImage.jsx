import Image from 'next/image';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import style from './FantomImage.module.scss';

export default function FantomImage({
	src,
	alt,
	width,
	height,
	layout,
	circle,
}) {
	const [loading, setLoading] = useState(true);

	return (
		<div className={style['fantom-image']}>
			{loading && <Skeleton className={style['skeleton']} circle={circle} />}
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				layout={layout}
				onLoad={() => setLoading(false)}
			/>
		</div>
	);
}

FantomImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	layout: PropTypes.string,
	circle: PropTypes.bool,
};
