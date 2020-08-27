import React from 'react';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import PROJETS_QUERY from '../apollo/queries/projets';

import Container from 'components/Global/Layout/Container';
import Menu from 'components/Global/Menus/Menu';
import Slider from 'components/Projets/Slider';
import MenuBottom from 'components/Global/Menus/MenuBottom';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

function Projets() {
	const ProjetsStyled = styled.div`
		position: relative;
		width: 100%;
		height: 100%;
		padding-bottom: 100px;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			padding-bottom: 0px;
			overflow-x: hidden;
		}

		&:before {
			content: '';
			width: 50%;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			background-color: ${(props) => props.theme.colors.light};

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				width: 100%;
				height: 50%;
				top: auto;
				right: auto;
				bottom: 0;
				left: 0;
			}
		}

		.main-content {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				padding-bottom: 0px;
			}
		}
	`;

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
			<ProjetsStyled>
				<Container className="main-content">
					<h1 className="--hide">Thomas Claireau - {data.meta.header.title}</h1>
					<Slider projets={data.projets} />
					<Menu space="60px" className="desktop" />
				</Container>
				<MenuBottom></MenuBottom>
			</ProjetsStyled>
		</>
	);
}

export default withApollo({ ssr: true })(Projets);
