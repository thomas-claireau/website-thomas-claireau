import React from 'react';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import A_PROPOS_QUERY from '../apollo/queries/a-propos';
import { setParagraph } from 'utils/editor.js';
import { motion } from 'framer-motion';

import Col from 'components/Global/Layout/Col';
import Query from 'components/Global/Query';
import LogosContainer from 'components/About/LogosContainer';
import MenuBottom from 'components/Global/Menus/MenuBottom';

function About() {
	const AboutStyled = styled.div`
		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			padding-bottom: 80px;
		}
		> .left {
			padding: 100px 40px 200px 40px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				padding: 100px 40px 40px 40px;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-mini']}) {
				padding: 100px 20px 20px 20px;
			}
		}

		> .right {
			padding: 40px 40px 40px 80px;
			color: ${(props) => props.theme.colors.light};

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				padding: 40px;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
				padding: 20px;
			}

			.texte {
				width: 80%;
				margin-top: 60px;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-header']}) {
					width: 90%;
				}

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					width: 100%;
					margin-top: 30px;
				}

				> *:first-of-type {
					margin: 0;
					padding: 0;
				}
			}
		}
	`;

	const transition = {
		hidden: { opacity: 0, y: '100%' },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<Query query={A_PROPOS_QUERY} id={null}>
			{({ data }) => {
				const about = data.a_propos;

				const SEO = {
					title: about.header.meta_title,
					description: about.header.meta_description,
					openGraph: {
						title: about.header.meta_title,
						description: about.header.meta_description,
					},
				};

				return (
					<>
						<NextSeo {...SEO} />
						<AboutStyled className="main-content">
							<Col direction="left" align="center">
								<LogosContainer languages={about.left_content.language} />
							</Col>
							<Col direction="right" align="flex-start">
								<motion.h1
									className="--uppercase"
									variants={transition}
									initial="hidden"
									animate="visible"
								>
									<span className="--hide">Thomas Claireau</span>
									<span>{about.header.title}</span>
								</motion.h1>
								<motion.div
									className="texte"
									dangerouslySetInnerHTML={{
										__html: setParagraph(about.right_content.description),
									}}
									variants={transition}
									initial="hidden"
									animate="visible"
								></motion.div>
							</Col>
							<MenuBottom></MenuBottom>
						</AboutStyled>
					</>
				);
			}}
		</Query>
	);
}

export default About;
