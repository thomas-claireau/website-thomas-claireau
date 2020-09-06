import React from 'react';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import PROJETS_QUERY from 'apollo/queries/projets';

import styles, { projets } from 'styles/pages/projets.module.scss';

import Container from 'components/Global/Layout/Container';
import Menu from 'components/Global/Menus/Menu';
import Slider from 'components/Projets/Slider';
import MenuBottom from 'components/Global/Menus/MenuBottom';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

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
					<Menu space="60px" className="desktop" />
				</Container>
				<MenuBottom></MenuBottom>
			</section>
		</>
	);
}

export default withApollo({ ssr: true })(Projets);
