import React from 'react';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import INDEX_QUERY from '../apollo/queries/index';

import styled from '@emotion/styled';

import Container from 'components/Global/Layout/Container';
import Col from 'components/Global/Layout/Col';
import ContentVM from 'components/Global/Layout/ContentVM';
import SliderWorks from 'components/Index/SliderWorks';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

function Home() {
	const HomeStyled = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		overflow: hidden;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			flex-direction: column;
			overflow-y: visible;
		}

		> div > .title {
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

		.description {
			margin-top: 50px;
			font-size: 20px;
			font-weight: 300;

			&.left {
				margin-right: 7px;
			}

			&.right {
				margin-left: 5px;
			}
		}
	`;

	const { data, loading, error } = useQuery(INDEX_QUERY);

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

	const accueil = data.accueil;

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
				<Col direction="left" bg="--bg-dark" align="flex-end">
					<div className="title h1 left --light desktop">
						<span>{accueil.titre_haut_gauche}</span>
						<span>{accueil.titre_bas_gauche}</span>
					</div>
					<p className="description left --light">{accueil.description_gauche}</p>
				</Col>
				<Col direction="right" bg="--bg-light" align="flex-start">
					<div className="title h1 --dark desktop">
						<span>{accueil.titre_haut_droite}</span>
						<span>{accueil.titre_bas_droite}</span>
					</div>
					<p className="description right --dark">{accueil.description_droite}</p>
				</Col>
				<ContentVM>
					<Container>
						<h1>{accueil.titre_mobile}</h1>
						<p className="--light">{accueil.header.meta_description}</p>
					</Container>
					<SliderWorks data={accueil.slide_work}></SliderWorks>
				</ContentVM>
			</HomeStyled>
		</>
	);
}

export default withApollo({ ssr: true })(Home);
