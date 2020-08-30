import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import CustomErrorPage from 'pages/404';
import { request } from 'graphql-request';
import PROJET_QUERY from 'apollo/queries/projet';

import HtmlContent from 'components/Global/HtmlContent';
import Col from 'components/Global/Layout/Col';
import MenuBottom from 'components/Global/Menus/MenuBottom';
import Sidebar from 'components/Projet/Sidebar';
import GithubInfo from 'components/Projet/GithubInfo';
import SliderOthersImages from 'components/Projet/SliderOthersImages';

import ArrowRightSvg from 'public/assets/img/arrow_right.svg';

import fetch from 'isomorphic-unfetch';

function Projet({ projet, github }) {
	const ProjetStyled = styled.div`
		overflow-x: hidden;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			padding: 50px 0;
		}

		> .left {
			padding: 60px 0;
			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				order: 1;
			}
		}

		> .right {
			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-header']}) {
				padding-right: 40px;
				padding-left: 40px;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
				padding-right: 15px;
				padding-left: 15px;
			}
		}

		nav.desktop {
			display: none;
		}

		.content {
			padding: 0 60px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
				padding: 0 15px;
			}
		}

		a.back {
			display: flex;
			justify-content: center;
			align-items: center;
			text-transform: uppercase;
			font-weight: bold;
			color: ${(props) => props.theme.colors.dark};

			&.bottom {
				margin-top: 80px;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					margin-top: 40px;
				}
			}

			svg {
				margin-right: 10px;

				path {
					fill: ${(props) => props.theme.colors.dark};
				}
			}
		}

		img.main-image {
			width: 100%;
			height: 75%;
			margin-top: 40px;
			border-radius: 3px;
			object-fit: cover;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-header']}) {
				height: 50%;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				height: 400px;
			}
		}
	`;

	if (!projet) return <CustomErrorPage />;

	const SEO = {
		title: projet.header.meta_title,
		description: projet.header.meta_description,
		openGraph: {
			title: projet.header.meta_title,
			description: projet.header.meta_description,
		},
	};

	projet.year = new Date(projet.year);

	return (
		<>
			<NextSeo {...SEO} />
			<ProjetStyled className="main-content">
				<Col direction="left" align="flex-start" justify="flex-start" scroll>
					<Link href="/projets">
						<a className="back top content">
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
					<img
						className="main-image content"
						src={projet.main_image.url}
						alt={projet.main_image.caption}
						title={projet.header.title}
					/>
					<HtmlContent className="content">{projet.resume}</HtmlContent>
					<GithubInfo
						github={github}
						languages={projet.technologies}
						bg={projet.main_image.url}
					/>
					<SliderOthersImages className="content" images={projet.others_images} />
					<HtmlContent className="content">{projet.results}</HtmlContent>
					<Link href="/projets">
						<a className="back bottom content">
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
				</Col>
				<Col direction="right" align="flex-start" justify="flex-start" width="30%">
					<Sidebar projet={projet} />
				</Col>
				<MenuBottom></MenuBottom>
			</ProjetStyled>
		</>
	);
}

export async function getServerSideProps({ params }) {
	const variables = { slug: params.slug };
	const auth = Buffer.from(`${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}`).toString(
		'base64'
	);

	return request(process.env.API_URL + '/graphql', PROJET_QUERY, variables).then((data) => {
		const projet = data.projets[0];

		const options = {
			mode: 'cors',
			headers: {
				Authorization: 'Basic ' + auth,
			},
		};

		return fetch(`${process.env.GITHUB_API}/repos/${projet.github}`, options)
			.then((response) => response.json())
			.then((github) => {
				return {
					props: {
						projet: projet || null,
						github: github || null,
					},
				};
			});
	});
}

export default Projet;
