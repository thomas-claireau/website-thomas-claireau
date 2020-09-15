import React from 'react';
import INDEX_QUERY from 'graphql-queries/index';
import { request } from 'graphql-request';

import { home, title, desktop, left, right, description } from 'styles/pages/index.module.scss';

import Container from 'components/global/layout/Container/index';
import Col from 'components/global/layout/Col/index';
import ContentVM from 'components/global/layout/ContentVM/index';
import SliderWork from 'components/index/SliderWork/index';
import GlobalSeo from 'components/global/GlobalSeo';

function Home({ data }) {
	const accueil = data.accueil;

	return (
		<>
			<GlobalSeo data={accueil} />
			<section className={home}>
				<Col direction="left" bg="--bg-dark" align="flex-end">
					<div className={`${title} ${left} ${desktop} h1 --light`}>
						<span>{accueil.titre_haut_gauche}</span>
						<span>{accueil.titre_bas_gauche}</span>
					</div>
					<p className={`${description} ${left} --light`}>{accueil.description_gauche}</p>
				</Col>
				<Col direction="right" bg="--bg-light" align="flex-start">
					<div className={`${title} ${desktop} h1 --dark`}>
						<span>{accueil.titre_haut_droite}</span>
						<span>{accueil.titre_bas_droite}</span>
					</div>
					<p className={`${description} ${right} --dark`}>{accueil.description_droite}</p>
				</Col>
				<ContentVM>
					<Container>
						<h1>{accueil.titre_mobile}</h1>
						<p className="--light">{accueil.header.meta_description}</p>
					</Container>
					<SliderWork data={accueil.slide_work}></SliderWork>
				</ContentVM>
			</section>
		</>
	);
}

export async function getServerSideProps() {
	return request(process.env.API_URL + '/graphql', INDEX_QUERY).then((data) => {
		return {
			props: {
				data: data || null,
			},
		};
	});
}

export default Home;
