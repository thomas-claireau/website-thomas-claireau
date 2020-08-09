import React from 'react';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import Container from 'components/Container';
import Col from 'components/Col';
import ContentVM from 'components/ContentVM';
import SliderWorks from 'components/SliderWorks';
import fetch from 'isomorphic-unfetch';

function Home() {
	console.log(process.env.API_URL);

	const fields = {
		titre_haut_gauche: 'test',
		titre_haut_droite: 'test',
		titre_bas_gauche: 'test',
		titre_bas_droite: 'test',
		header: {
			meta_description: 'test',
			meta_title: 'test',
			title: 'test',
		},
	};

	const {
		titre_haut_gauche,
		titre_haut_droite,
		titre_bas_gauche,
		titre_bas_droite,
		header,
	} = fields;

	const { meta_description, meta_title, title } = header;

	const SEO = {
		title: meta_title,
		description: meta_description,
		openGraph: {
			title: 'Thomas Claireau | About page',
			description: 'Just a description of my stack',
		},
	};

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
		<>
			<NextSeo {...SEO} />
			<HomeStyled>
				<Col direction="left" bg="--bg-dark" align="center">
					<h1 className="--hide">I'm a fullstack web developper</h1>
					<div className="title h1 left --light desktop">
						<span>{titre_haut_gauche}</span>
						<span>{titre_bas_gauche}</span>
					</div>
				</Col>
				<Col direction="right" bg="--bg-light" align="center">
					<div className="title h1 --dark desktop">
						<span>{titre_haut_droite}</span>
						<span>{titre_bas_droite}</span>
					</div>
				</Col>
				<ContentVM>
					<Container>
						<h1>{title}</h1>
					</Container>
					<SliderWorks></SliderWorks>
				</ContentVM>
			</HomeStyled>
		</>
	);
}

// export async function getServerSideProps() {
// 	const { API_URL } = process.env;

// 	const res = await fetch(`${API_URL}/accueil`);
// 	const data = await res.json();

// 	return {
// 		props: {
// 			fields: data,
// 		},
// 	};
// }

export default Home;
