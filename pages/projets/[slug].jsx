import React from 'react';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import CustomErrorPage from 'pages/404';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import PROJET_QUERY from 'apollo/queries/projet';

import Col from 'components/Global/Layout/Col';
import Container from 'components/Global/Layout/Container';
import Menu from 'components/Global/Menus/Menu';
import MenuBottom from 'components/Global/Menus/MenuBottom';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

function Projet() {
	const ProjetStyled = styled.div``;

	const router = useRouter();
	const slug = router.query.slug;

	const { data, loading, error } = useQuery(PROJET_QUERY, {
		variables: { slug },
	});

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

	const res = data.projets;

	if (Array.isArray(res) && !res.length) return <CustomErrorPage />;

	const projet = res[0];

	console.log(projet);

	const SEO = {
		title: projet.header.meta_title,
		description: projet.header.meta_description,
		openGraph: {
			title: projet.header.meta_title,
			description: projet.header.meta_description,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<ProjetStyled className="main-content">
				<Col direction="left" align="center">
					<h1 className="--hide">Thomas Claireau - {projet.header.title}</h1>
				</Col>
				<Col direction="right" align="flex-start">
					coucou
				</Col>

				<MenuBottom></MenuBottom>
			</ProjetStyled>
		</>
	);
}

export default withApollo({ ssr: true })(Projet);
