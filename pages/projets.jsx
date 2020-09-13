import React from 'react';
import { NextSeo } from 'next-seo';
import PROJETS_QUERY from 'apollo/queries/projets';
import { request } from 'graphql-request';

import styles, { projets } from 'styles/pages/projets.module.scss';

import Container from 'components/global/layout/Container/index';
import Menu from 'components/global/menus/Menu/index';
import Slider from 'components/projets/Slider/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';

function Projets({ data }) {
	const SEO = {
		title: data.meta.header.meta_title,
		description: data.meta.header.meta_description,
		openGraph: {
			title: data.meta.header.meta_title,
			description: data.meta.header.meta_description,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<section className={projets}>
				<Container className={styles['main-content']}>
					<h1 className="--hide">Thomas Claireau - {data.meta.header.title}</h1>
					<Slider projets={data.projets} />
					<Menu view="desktop" />
				</Container>
				<MenuBottom></MenuBottom>
			</section>
		</>
	);
}

export async function getServerSideProps() {
	return request(process.env.API_URL + '/graphql', PROJETS_QUERY).then((data) => {
		return {
			props: {
				data: data || null,
			},
		};
	});
}

export default Projets;
