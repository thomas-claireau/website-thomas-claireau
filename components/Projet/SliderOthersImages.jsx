import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import SwiperButtonSvg from 'public/assets/img/swiper-button.svg';

export default function SliderOthersImages({ images }) {
	SwiperCore.use([Navigation]);
	const isNavigation = images.length > 2;

	const SliderOthersImagesStyled = styled(Swiper)`
		&.swiper-container {
			margin-top: 60px;
			margin-bottom: ${isNavigation ? '30px' : '0px'};
			width: 100%;
			height: 100%;
			overflow: visible;

			.swiper-button-prev,
			.swiper-button-next {
				top: auto;
				bottom: -60px;

				&:after {
					content: none;
				}
			}

			.swiper-button-prev {
				transform: rotate(180deg);
			}

			.swiper-wrapper {
				height: 100%;
			}

			.swiper-slide {
				height: 100%;

				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	`;

	const config = {
		slidesPerView: 2,
		grabCursor: true,
		spaceBetween: 50,
		navigation: isNavigation
			? {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
			  }
			: false,
	};

	return (
		<SliderOthersImagesStyled {...config}>
			{isNavigation && <SwiperButtonSvg className="swiper-button-prev"></SwiperButtonSvg>}
			{images &&
				images.map((image) => {
					return (
						<SwiperSlide key={image.id}>
							<img src={image.url} alt={image.caption} title={image.caption} />
						</SwiperSlide>
					);
				})}
			{isNavigation && <SwiperButtonSvg className="swiper-button-next"></SwiperButtonSvg>}
		</SliderOthersImagesStyled>
	);
}
