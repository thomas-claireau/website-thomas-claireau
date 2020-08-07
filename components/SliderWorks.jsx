import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
// import React, { useState, useEffect, Component } from 'react';

export default function SliderWorks({ children }) {
	const SliderWorksStyled = styled(Swiper)`
		width: 100%;
		height: 100%;

		.swiper-slide {
			width: auto;
		}
	`;

	return (
		<Swiper>
			<SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
		</Swiper>
	);
}
