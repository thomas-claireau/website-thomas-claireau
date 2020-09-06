import React from 'react';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import INDEX_QUERY from 'apollo/queries/index';

import {
	home,
	title,
	desktop,
	mobile,
	left,
	right,
	description,
} from 'styles/pages/index.module.scss';

import Container from 'components/Global/Layout/Container';
import Col from 'components/Global/Layout/Col';
import ContentVM from 'components/Global/Layout/ContentVM';
import SliderWorks from 'components/Index/SliderWorks';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

function Home() {
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
					<SliderWorks data={accueil.slide_work}></SliderWorks>
				</ContentVM>
			</section>
		</>
	);
}

export default withApollo({ ssr: true })(Home);
