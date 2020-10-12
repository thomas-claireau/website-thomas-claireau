import React from 'react';
import Link from 'next/link';
import CustomErrorPage from 'pages/404';
import { request } from 'graphql-request';
import PROJET_QUERY from 'graphql-queries/projet';
import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import styles, {
	projet,
	left,
	right,
	content,
	back,
	bottom,
} from 'styles/pages/projet.module.scss';

import HtmlContent from 'components/global/HtmlContent/index';
import Col from 'components/global/layout/Col/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';
import Sidebar from 'components/global/Sidebar/index';
import GithubInfo from 'components/projet/GithubInfo/index';
import SliderOthersImages from 'components/projet/SliderOthersImages/index';
import GlobalSeo from 'components/global/GlobalSeo';

import ArrowRightSvg from 'public/assets/img/arrow_right.svg';

import fetch from 'isomorphic-unfetch';

function Projet({ data, github }) {
	if (!data) return <CustomErrorPage />;

	data.year = new Date(data.year);
	const router = useRouter();
	const url = process.env.FRONT_URL + router.asPath;

	const globalTransition = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const transitionItem = {
		hidden: { opacity: 0, y: '30%' },
		visible: { opacity: 1, y: 0 },
	};

	const isListeProjets = data.liste_projets;

	return (
		<>
			<GlobalSeo data={data} />
			<motion.section
				className={`${projet} projet main-content`}
				variants={globalTransition}
				initial="hidden"
				animate="visible"
			>
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
							Retour
						</a>
					</Link>
					<motion.img
						variants={transitionItem}
						className={`${styles['main-image']} ${content}`}
						src={data.header.main_image.url}
						alt={data.header.main_image.alt}
						title={data.header.title}
					/>
					<motion.div variants={transitionItem}>
						<HtmlContent className={`${content}`}>{data.resume}</HtmlContent>
					</motion.div>
					{!data.liste_projets && (
						<GithubInfo
							github={github}
							languages={data.technologies}
							bg={data.header.main_image.url}
						/>
					)}
					<SliderOthersImages
						className={`${content}`}
						images={data.others_images}
						listeProjets={isListeProjets}
					/>
					<HtmlContent className={`${content}`}>{data.results}</HtmlContent>
					<Link href="/projets">
						<a className={`${back} ${bottom} ${content}`}>
							<ArrowRightSvg />
							Retour
						</a>
					</Link>
				</Col>
				<Col
					className={right}
					direction="right"
					align="flex-start"
					justify="flex-start"
					width="40%"
				>
					<motion.div variants={transitionItem}>
						<Sidebar data={data} view="projet" />
					</motion.div>
				</Col>
				<MenuBottom></MenuBottom>
				<ArticleJsonLd
					url={url}
					title={data.header.meta_title}
					images={[data.header.main_image.url]}
					datePublished={data.created_at}
					dateModified={data.updated_at}
					authorName={`${data.header.user.username} ${data.header.user.name}`}
					publisherName={`${data.header.user.username} ${data.header.user.name}`}
					publisherLogo={data.header.user.avatar.url}
					description={data.header.meta_description}
				/>
			</motion.section>
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

		return fetch(`${process.env.GITHUB_API}/repos/${projet.github_text}`, options)
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
