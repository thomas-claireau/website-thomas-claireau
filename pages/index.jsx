import React from 'react';
import { NextSeo } from 'next-seo';
import INDEX_QUERY from '../apollo/queries/index';

import styled from '@emotion/styled';

import Query from 'components/Query';
import Container from 'components/Container';
import Col from 'components/Col';
import ContentVM from 'components/ContentVM';
import SliderWorks from 'components/SliderWorks';

function Home({ fields }) {
	const HomeStyled = styled.div`
		width: 100%;
		height: 100%;
		display: flex;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			flex-direction: column;
		}

		.title {
			display: flex;
			flex-direction: column;

			&.desktop {
				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					display: none;
				}
			}

			&.mobile {
				display: none;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					display: inherit;
				}
			}

			&.left {
				align-items: flex-end;
			}
		}
	`;

	return (
		<Query query={INDEX_QUERY} id={null}>
			{({ data: { accueil } }) => {
				const SEO = {
					title: accueil.header.meta_title,
					description: accueil.header.meta_description,
					openGraph: {
						title: accueil.header.meta_title,
						description: accueil.header.meta_description,
					},
				};

				return (
					<>
						<NextSeo {...SEO} />
						<HomeStyled>
							<Col direction="left" bg="--bg-dark" align="center">
								<h1 className="--hide">{accueil.titre_mobile}</h1>
								<div className="title h1 left --light desktop">
									<span>{accueil.titre_haut_gauche}</span>
									<span>{accueil.titre_bas_gauche}</span>
								</div>
							</Col>
							<Col direction="right" bg="--bg-light" align="center">
								<div className="title h1 --dark desktop">
									<span>{accueil.titre_haut_droite}</span>
									<span>{accueil.titre_bas_droite}</span>
								</div>
							</Col>
							{/* <ContentVM>
								<Container>
									<h1>{accueil.titre_mobile}</h1>
								</Container>
								<SliderWorks data={accueil.slide_work}></SliderWorks>
							</ContentVM> */}
						</HomeStyled>
					</>
				);
			}}
		</Query>
	);
}

export default Home;
