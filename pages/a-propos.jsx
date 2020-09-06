import React from 'react';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import A_PROPOS_QUERY from 'apollo/queries/a-propos';
import { setParagraph } from 'utils/editor.js';
import { motion } from 'framer-motion';

import HtmlContent from 'components/Global/HtmlContent';
import Col from 'components/Global/Layout/Col';
import LogosContainer from 'components/About/LogosContainer/index';
import MenuBottom from 'components/Global/Menus/MenuBottom';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

function About() {
	const AboutStyled = styled.div`
		overflow-x: hidden;

		> .left {
			padding: 100px 40px 200px 40px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				order: 1;
				padding: 40px 40px 80px 40px;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-mini']}) {
				padding: 20px 20px 80px 20px;
			}
		}

		> .right {
			padding: 40px 40px 40px 80px;
			color: ${(props) => props.theme.colors.light};

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				padding: 80px 40px 40px 40px;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
				padding: 80px 20px 20px 20px;
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

	const { data, loading, error } = useQuery(A_PROPOS_QUERY);

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

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
					<motion.div variants={transition} initial="hidden" animate="visible">
						<HtmlContent
							className="texte"
							variants={transition}
							initial="hidden"
							animate="visible"
						>
							{about.right_content.description}
						</HtmlContent>
					</motion.div>
				</Col>
				<MenuBottom></MenuBottom>
			</AboutStyled>
		</>
	);
}

export default withApollo({ ssr: true })(About);
