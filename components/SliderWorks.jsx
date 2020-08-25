import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Link from 'next/link';

import Container from 'components/Container';

export default function SliderWorks({ data }) {
	const { title, view_all_label, view_all_link, projet_relation: projets } = data;

	SwiperCore.use([Autoplay]);

	const breakpoints = {
		1024: {
			slidesPerView: 3,
		},
		650: {
			slidesPerView: 2,
		},
	};

	const SliderWorksStyled = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;

		> .container {
			padding-bottom: 20px;
			width: 100%;
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
			width: 100%;
			height: 40vh;
			margin-top: 20px;

			.swiper-wrapper {
				transition-timing-function: linear !important;
			}

			.swiper-slide {
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	`;

	return (
		<SliderWorksStyled className="slider-works">
			<Container>
				<div className="title">
					{title}
					<Link href={view_all_link}>
						<a>{view_all_label}</a>
					</Link>
				</div>
			</Container>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				breakpoints={breakpoints}
				freeMode={true}
				loop={true}
				speed={8000}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
			>
				{projets.map(({ projet }) => {
					const { id, main_image } = projet;

					if (!id || !main_image) return;

					return (
						<SwiperSlide key={id}>
							<Link href={`${view_all_link}/${id}`}>
								<a>
									<img src={main_image.url} />
								</a>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</SliderWorksStyled>
	);
}
