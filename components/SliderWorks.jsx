import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

export default function SliderWorks({ children }) {
	const [width, setWidth] = useState(null);

	const test = ['slide 1 ', 'slide 2', 'slide 3', 'slide 4'];

	function reportWindowSize() {
		setWidth(window.innerWidth - 50 + 'px');
		return window.innerWidth - 50 + 'px';
	}

	useEffect(() => {
		if (process.browser) {
			setWidth(reportWindowSize());
			window.onresize = reportWindowSize;
		}
	}, []);

	const SliderWorksStyled = styled(Swiper)`
		width: ${width};
		height: 100%;

		.swiper-slide {
			border: 1px solid black;
		}
	`;

	return (
		<SliderWorksStyled slidesPerView={1} spaceBetween={20}>
			{test.map((item, index) => {
				return <SwiperSlide key={index}>{item}</SwiperSlide>;
			})}
		</SliderWorksStyled>
	);
}
