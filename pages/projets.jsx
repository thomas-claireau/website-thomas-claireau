import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import PROJETS_QUERY from '../apollo/queries/projets';
import { setParagraph } from 'utils/editor.js';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';

import Query from 'components/Global/Query';
import Container from 'components/Global/Layout/Container';
import Menu from 'components/Global/Menus/Menu';

function Projets() {
	const ProjetsStyled = styled.div`
		position: relative;
		height: 100%;
		padding-bottom: 100px;

		&:before {
			content: '';
			width: 50%;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			background-color: ${(props) => props.theme.colors.light};
		}

		.main-content {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.swiper-container {
			width: 100%;
			height: 515px;
			margin-top: 20px;

			@media screen and (max-width: ${(props) =>
					props.theme.breakpoints['break-header-xl']}) {
				overflow: visible;
			}

			.swiper-pagination-bullets-dynamic {
				top: 55%;
			}

			.swiper-pagination-bullets {
				right: 50px;
				width: 12px;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-header-xl']}) {
					right: -40px;
					z-index: 1;
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
							props.theme.breakpoints['break-header']}) {
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
								props.theme.breakpoints['break-header']}) {
							text-align: center;
						}
					}

					.description {
						width: 50%;
						margin-top: 50px;
						color: ${(props) => props.theme.colors.light};

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-header']}) {
							width: 100%;
							text-align: center;
						}
					}

					.view {
						position: absolute;
						bottom: 0;
						left: 45px;
						color: ${(props) => props.theme.colors.light};
						text-transform: uppercase;
						letter-spacing: 1px;
						font-weight: 600;

						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-header']}) {
							position: relative;
							margin-top: 50px;
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
									props.theme.breakpoints['break-header']}) {
								content: none;
							}
						}
					}
				}

				.right {
					min-width: 1080px;
					width: 1080px;
					height: 100%;
					position: absolute;
					top: 0;
					right: 100px;
					opacity: 0;
					transition: opacity 0.3s ease-in-out;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-header-xl']}) {
						right: 0;
					}

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-header']}) {
						min-width: auto;
						width: 100%;
						position: relative;
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
								props.theme.breakpoints['break-header']}) {
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

	const router = useRouter();
	SwiperCore.use([EffectFade, Mousewheel, Pagination]);

	return (
		<Query query={PROJETS_QUERY} id={null}>
			{({ data }) => {
				const SEO = {
					title: data.meta.header.meta_title,
					description: data.meta.header.meta_description,
					openGraph: {
						title: data.meta.header.meta_title,
						description: data.meta.header.meta_description,
					},
				};

				const projets = data.projets;

				return (
					<>
						<NextSeo {...SEO} />
						<ProjetsStyled>
							<Container className="main-content">
								<h1 className="--hide">
									Thomas Claireau - {data.meta.header.title}
								</h1>
								<Swiper
									className="projets"
									slidesPerView={1}
									direction="vertical"
									effect="fade"
									grabCursor={true}
									mousewheel={true}
									pagination={{ clickable: true, dynamicBullets: true }}
								>
									{projets &&
										projets.map((projet) => {
											return (
												<SwiperSlide key={projet.id} className="projet">
													<div className="left">
														<div className="title h1">
															{projet.title}
														</div>
														<p className="description">
															{projet.short_description}
														</p>
														<Link href={`${router.route}/${projet.id}`}>
															<a className="view">Voir le projet</a>
														</Link>
													</div>
													<div className="right">
														<img
															src={projet.main_image.url}
															alt={projet.main_image.caption}
														/>
													</div>
												</SwiperSlide>
											);
										})}
								</Swiper>
								<Menu space="60px" className="desktop" />
							</Container>
						</ProjetsStyled>
					</>
				);
			}}
		</Query>
	);
}

export default Projets;
