import React from 'react';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import A_PROPOS_QUERY from '../apollo/queries/a-propos';
import { setParagraph } from 'utils/editor.js';

import Col from 'components/Col';
import Query from 'components/Query';

function test(obj) {
	const images = {
		main: obj.main_image.url,
		others: [...obj.others_images],
	};

	console.log(images);

	return (
		<>
			<div className="parent"></div>
			<div className="childrens"></div>
		</>
	);
}

function About() {
	const AboutStyled = styled.div`
		> .left {
			padding: 100px 40px 200px 40px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				padding: 100px 40px 40px 40px;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-mini']}) {
				padding: 100px 20px 20px 20px;
			}

			div {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					width: auto;
				}

				&.parent {
					width: auto;
				}
			}

			> div {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				&.bottom {
					margin-top: 80px;
					justify-content: space-between;
					flex-direction: row;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						margin-top: 20px;
						flex-direction: column;
					}
				}

				> div {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						flex-direction: row;
					}

					&:not(:first-of-type) {
						@media screen and (max-width: ${(props) =>
								props.theme.breakpoints['break-large']}) {
							margin-top: 25px;
						}
					}

					> .childrens {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}

			.parent {
				&:hover {
					+ .childrens {
						svg {
							filter: grayscale(0%);
						}
					}
				}

				svg {
					width: auto;
					height: 130px;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						height: 100px;
					}

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-tablet']}) {
						height: 60px;
					}
				}
			}

			.childrens {
				margin-top: 25px;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					margin-top: 0px;
				}

				svg {
					width: auto;
					min-height: 60px;
					height: 60px;
					filter: grayscale(100%);
					transition: all 0.3s ease-in-out;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						margin-left: 20px;
						filter: grayscale(0%);
					}

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-small']}) {
						min-height: 40px;
						height: 40px;
					}

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-mini']}) {
						min-height: 30px;
						height: 30px;
					}

					&:hover {
						filter: grayscale(0%);
						transition: all 0.3s ease-in-out;
					}

					&:not(:first-of-type) {
						margin-left: 20px;
					}
				}
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

	return (
		<Query query={A_PROPOS_QUERY} id={null}>
			{({ data }) => {
				const about = data.a_propos;

				const languages = about.left_content.language;
				const top = languages[0];
				const bottom = languages.filter((item, index) => index !== 0);

				// console.log(top);
				// console.log(bottom);

				test(top);

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
								<div className="top">
									<div>
										<div className="parent">{/* <JavascriptSVG /> */}</div>
										<div className="childrens">
											{/* <WebpackSVG />
								<NodeJsSVG />
								<ReactSVG />
								<VueJsSVG /> */}
										</div>
									</div>
								</div>
								<div className="bottom">
									<div className="left">
										<div className="parent">{/* <CssSVG /> */}</div>
										<div className="childrens">
											{/* <SassSVG />
								<BootstrapSVG /> */}
										</div>
									</div>
									<div className="right">
										<div className="parent">{/* <PhpSVG /> */}</div>
										<div className="childrens">
											{/* <WordpressSVG />
								<SymfonySVG /> */}
										</div>
									</div>
								</div>
							</Col>
							<Col direction="right" align="flex-start">
								<h1 className="--uppercase">
									<span className="--hide">Thomas Claireau</span>
									<span>{about.header.title}</span>
								</h1>
								<div
									className="texte"
									dangerouslySetInnerHTML={{
										__html: setParagraph(about.right_content.description),
									}}
								></div>
							</Col>
						</AboutStyled>
					</>
				);
			}}
		</Query>
	);
}

export default About;