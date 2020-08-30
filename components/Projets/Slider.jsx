import { useRouter } from 'next/router';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';
import styled from '@emotion/styled';

export default function Slider({ projets }) {
	const router = useRouter();
	SwiperCore.use([EffectFade, Mousewheel, Pagination]);

	const SliderStyled = styled(Swiper)`
		&.swiper-container {
			width: 100%;
			height: 515px;
			margin-top: 20px;
			margin-left: 36px;

			@media screen and (max-width: ${(props) =>
					props.theme.breakpoints['break-header-xl']}) {
				overflow: visible;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-medium']}) {
				overflow: hidden;
				margin-left: 0;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
				height: 70%;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-small']}) {
				height: 50%;
			}

			.swiper-pagination-bullets-dynamic {
				top: 55%;
			}

			.swiper-pagination-bullets {
				right: 50px;
				width: 12px !important;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large-xl']}) {
					right: -40px;
					z-index: 1;
				}

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-medium']}) {
					display: none;
				}

				.swiper-pagination-bullet {
					width: 12px;
					height: 12px;
				}
			}

			.swiper-wrapper {
				height: 100%;
				transition-timing-function: linear !important;
			}

			.swiper-slide {
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				position: relative;

				&.swiper-slide-active {
					.left,
					.right {
						opacity: 1;
						transition: opacity 0.3s ease-in-out;
					}
				}

				.left {
					width: 50%;
					height: 100%;
					position: relative;
					padding-top: 70px;
					opacity: 0;
					transition: opacity 0.3s ease-in-out;
					z-index: 1;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						width: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						position: absolute;
						top: 50%;
						left: 50%;
						padding-top: 0;
						transform: translate(-50%, -50%);
					}

					.title {
						color: ${(props) => props.theme.colors.light};

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-large']}) {
							text-align: center;
						}

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-medium']}) {
							width: 100%;
						}

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-small']}) {
							font-size: 25px;
						}
					}

					.description {
						width: 50%;
						margin-top: 50px;
						color: ${(props) => props.theme.colors.light};

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-large']}) {
							width: 100%;
							text-align: center;
						}

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-medium']}) {
							padding-right: 10px;
							padding-left: 10px;
						}
					}

					.view {
						position: relative;
						margin-top: 100px;
						margin-left: 45px;
						color: ${(props) => props.theme.colors.light};
						text-transform: uppercase;
						letter-spacing: 1px;
						font-weight: 600;

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-large']}) {
							position: relative;
							margin: 50px 0 0 0;
							bottom: auto;
							left: auto;
							text-align: center;
						}

						&:before {
							content: '';
							position: absolute;
							top: 50%;
							left: -45px;
							width: 30px;
							height: 2px;
							transform: translateY(-50%);
							background-color: ${(props) => props.theme.colors.light};
							border-radius: 10px;

							@media screen and (max-width: ${(props) =>
									props.theme.breakpoints['break-large']}) {
								content: none;
							}
						}
					}
				}

				.right {
					width: 80%;
					height: 100%;
					position: absolute;
					top: 50%;
					right: 100px;
					opacity: 0;
					transform: translateY(-50%);
					transition: opacity 0.3s ease-in-out;

					@media screen and (max-height: 800px) {
						height: 80%;
					}

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large-xl']}) {
						right: auto;
					}

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						min-width: auto;
						width: 100%;
						position: relative;
						right: auto;
					}

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-tablet']}) {
						height: 100%;
					}

					&:before {
						content: '';
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						background-color: #000;
						opacity: 0.3;
						z-index: 0;

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-large']}) {
							opacity: 0.5;
						}
					}
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-tablet']}) {
						min-height: 250px;
					}

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-small']}) {
						min-height: none;
					}
				}
			}
		}
	`;

	const breakpoints = {
		1024: {
			slidesPerView: 1,
			direction: 'vertical',
		},
	};

	return (
		<SliderStyled
			className="projets"
			slidesPerView={1}
			breakpoints={breakpoints}
			direction="horizontal"
			effect="slide"
			grabCursor={true}
			mousewheel={true}
			pagination={{ clickable: true, dynamicBullets: true }}
		>
			{projets &&
				projets.map((projet) => {
					return (
						<SwiperSlide key={projet.id} className="projet">
							<div className="left">
								<div className="title h1">{projet.header.title}</div>
								<p className="description">{projet.short_description}</p>
								<Link href={`${router.route}/${projet.slug}`}>
									<a className="view">Voir le projet</a>
								</Link>
							</div>
							<div className="right">
								<img src={projet.main_image.url} alt={projet.main_image.caption} />
							</div>
						</SwiperSlide>
					);
				})}
		</SliderStyled>
	);
}
