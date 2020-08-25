import React from 'react';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import PROJETS_QUERY from '../apollo/queries/projets';
import { setParagraph } from 'utils/editor.js';
import { motion } from 'framer-motion';

import Query from 'components/Query';
import Container from 'components/Container';

function Projets() {
	const ProjetsStyled = styled.div`
		.main-content {
			padding-top: 90px;
			padding-bottom: 90px;
		}
	`;

	return (
		<Query query={PROJETS_QUERY} id={null}>
			{({ data }) => {
				const SEO = {
					title: data.meta.header.meta_title,
					description: data.meta.header.meta_description,
					openGraph: {
						title: data.meta.header.meta_title,
						description: data.meta.header.meta_description,
					},
				};

				const projets = data.projets;

				return (
					<>
						<NextSeo {...SEO} />
						<ProjetsStyled>
							<Container className="main-content">
								<h1 className="--hide">
									Thomas Claireau - {data.meta.header.title}
								</h1>
								<div className="projets">
									{projets && projets.map((projet) => {})}
								</div>
							</Container>
						</ProjetsStyled>
					</>
				);
			}}
		</Query>
	);
}

export default Projets;
