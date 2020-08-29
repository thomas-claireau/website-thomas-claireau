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

function Projet({ projet }) {
	const ProjetStyled = styled.div`
		> .left {
			padding-bottom: 60px;
		}

		nav.desktop {
			display: none;
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
						<a className="back top">
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
					<img
						className="main-image"
						src={projet.main_image.url}
						alt={projet.main_image.caption}
						title={projet.header.title}
					/>
					<HtmlContent>{projet.resume}</HtmlContent>
					<GithubInfo />
					<SliderOthersImages images={projet.others_images} />
					<HtmlContent>{projet.results}</HtmlContent>
					<Link href="/projets">
						<a className="back bottom">
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

	return request(process.env.API_URL + '/graphql', PROJET_QUERY, variables).then((data) => {
		return {
			props: { projet: data.projets[0] || null },
		};
	});
}

export default Projet;
