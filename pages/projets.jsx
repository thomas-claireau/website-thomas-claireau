import React from 'react';
import PROJETS_QUERY from 'graphql-queries/projets';
import { request } from 'graphql-request';

import styles, { projets } from 'styles/pages/projets.module.scss';

import Container from 'components/global/layout/Container/index';
import Menu from 'components/global/menus/Menu/index';
import Slider from 'components/projets/Slider/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';
import GlobalSeo from 'components/global/GlobalSeo';

function Projets({ data }) {
	return (
		<>
			<GlobalSeo data={data.liste_projets} />
			<section className={projets}>
				<Container className={styles['main-content']}>
					<h1 className="--hide">Thomas Claireau - {data.liste_projets.header.title}</h1>
					<Slider projets={data.liste_projets.projets_list} />
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
