import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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

	const SliderWorksStyled = styled.div`
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		margin-top: 150px;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
			margin-top: 100px;
		}

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-small']}) {
			margin-top: 50px;
		}

		.title {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			font-size: 20px;
			font-weight: bold;
			color: ${(props) => props.theme.colors.light};

			> a {
				color: ${(props) => props.theme.colors.link};
			}
		}

		.swiper-container {
			width: ${width};
			height: 40vh;
			margin-top: 20px;

			.swiper-slide {
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	`;

	const breakpoints = {
		1024: {
			slidesPerView: 3,
		},
		650: {
			slidesPerView: 2,
		},
	};

	return (
		<SliderWorksStyled className="slider-works">
			<div className="title">
				My work
				<Link href="/works">
					<a>View all work</a>
				</Link>
			</div>
			<Swiper slidesPerView={1} spaceBetween={30} breakpoints={breakpoints}>
				{test.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<Link href={`/works/${index}`}>
								<a>
									<img src="https://picsum.photos/300/400" />
								</a>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</SliderWorksStyled>
	);
}
