import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import styles from './index.module.scss';

console.log(styles);

import SwiperButtonSvg from 'public/assets/img/swiper-button.svg';

export default function SliderOthersImages({ images, className, ...props }) {
	SwiperCore.use([Navigation]);
	const isNavigation = images.length > 2;

	const config = {
		slidesPerView: 1.5,
		grabCursor: true,
		spaceBetween: 10,
		navigation: isNavigation
			? {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
			  }
			: false,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 50,
			},
		},
	};

	return (
		<Swiper
			className={`${styles['slider-others-images']} ${className} slider-others-images`}
			{...props}
			{...config}
			style={{ marginBottom: `${isNavigation ? '30px' : '0px'}` }}
		>
			{isNavigation && <SwiperButtonSvg className="swiper-button-prev"></SwiperButtonSvg>}
			{images &&
				images.map((image) => {
					return (
						<SwiperSlide className={styles['swiper-slide']} key={image.id}>
							<img src={image.url} alt={image.caption} title={image.caption} />
						</SwiperSlide>
					);
				})}
			{isNavigation && <SwiperButtonSvg className="swiper-button-next"></SwiperButtonSvg>}
		</Swiper>
	);
}
