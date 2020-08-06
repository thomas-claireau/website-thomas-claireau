import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SliderWorks({ children }) {
	const SliderWorksStyled = styled.div`
		.swiper-container {
			width: 100%;
			height: 100%;
		}
	`;

	// if (!process.browser) return null;

	// if (process.browser) {
	return (
		<SliderWorksStyled className="slider-works">
			{/* <Swiper>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					...
				</Swiper> */}
		</SliderWorksStyled>
	);
	// }

	// return <div>Chargement</div>;
}
