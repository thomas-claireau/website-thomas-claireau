import React from 'react';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import PROJETS_QUERY from 'apollo/queries/projets';

import styles, { projets } from 'styles/pages/projets.module.scss';

import Container from 'components/global/layout/Container/index';
import Menu from 'components/global/menus/Menu/index';
import Slider from 'components/projets/Slider/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';
import { Loading } from 'components/global/Loading/index';
import { Error } from 'components/global/Error/index';

function Projets() {
	const { data, loading, error } = useQuery(PROJETS_QUERY);

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

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

export default withApollo({ ssr: true })(Projets);
