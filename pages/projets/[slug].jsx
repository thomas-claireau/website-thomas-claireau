import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import CustomErrorPage from 'pages/404';
import { request } from 'graphql-request';
import PROJET_QUERY from 'apollo/queries/projet';

import styles, {
	projet,
	left,
	right,
	content,
	back,
	bottom,
} from 'styles/pages/projet.module.scss';

import HtmlContent from 'components/Global/HtmlContent';
import Col from 'components/Global/Layout/Col';
import MenuBottom from 'components/Global/Menus/MenuBottom';
import Sidebar from 'components/Projet/Sidebar';
import GithubInfo from 'components/Projet/GithubInfo';
import SliderOthersImages from 'components/Projet/SliderOthersImages';

import ArrowRightSvg from 'public/assets/img/arrow_right.svg';

import fetch from 'isomorphic-unfetch';

function Projet({ data, github }) {
	if (!data) return <CustomErrorPage />;
	data.year = new Date(data.year);

	const SEO = {
		title: data.header.meta_title,
		description: data.header.meta_description,
		openGraph: {
			title: data.header.meta_title,
			description: data.header.meta_description,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<section className={`${projet} main-content`}>
				<Col
					className={left}
					direction="left"
					align="flex-start"
					justify="flex-start"
					scroll
				>
					<Link href="/projets">
						<a className={`${back} ${content}`}>
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
					<img
						className={`${styles['main-image']} ${content}`}
						src={data.main_image.url}
						alt={data.main_image.caption}
						title={data.header.title}
					/>
					<HtmlContent className={`${content}`}>{data.resume}</HtmlContent>
					<GithubInfo
						github={github}
						languages={data.technologies}
						bg={data.main_image.url}
					/>
					<SliderOthersImages className={`${content}`} images={data.others_images} />
					<HtmlContent className={`${content}`}>{data.results}</HtmlContent>
					<Link href="/projets">
						<a className={`${back} ${bottom} ${content}`}>
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
				</Col>
				<Col
					className={right}
					direction="right"
					align="flex-start"
					justify="flex-start"
					width="30%"
				>
					<Sidebar projet={data} />
				</Col>
				<MenuBottom></MenuBottom>
			</section>
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
						data: projet || null,
						github: github || null,
					},
				};
			});
	});
}

export default Projet;
