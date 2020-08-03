import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Container from 'components/Container';
import Col from 'components/Col';

import JavascriptSVG from 'public/assets/img/javascript.svg';
import WebpackSVG from 'public/assets/img/webpack.svg';
import NodeJsSVG from 'public/assets/img/nodejs.svg';
import ReactSVG from 'public/assets/img/reactjs.svg';
import VueJsSVG from 'public/assets/img/vuejs.svg';
import CssSVG from 'public/assets/img/css.svg';
import SassSVG from 'public/assets/img/sass.svg';
import BootstrapSVG from 'public/assets/img/bootstrap.svg';
import PhpSVG from 'public/assets/img/php.svg';
import WordpressSVG from 'public/assets/img/wordpress.svg';
import SymfonySVG from 'public/assets/img/symfony.svg';

function About() {
	return (
		<>
			<Head>
				<title>Thomas Claireau | About me</title>
			</Head>
			<Container>
				<AboutStyled className="main-content">
					<Col direction="left" bg="--bg-light" align="center">
						<div className="top">
							<div>
								<div className="parent">
									<JavascriptSVG />
								</div>
								<div className="children">
									<WebpackSVG />
									<NodeJsSVG />
									<ReactSVG />
									<VueJsSVG />
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="left">
								<div className="parent">
									<CssSVG />
								</div>
								<div className="children">
									<SassSVG />
									<BootstrapSVG />
								</div>
							</div>
							<div className="right">
								<div className="parent">
									<PhpSVG />
								</div>
								<div className="children">
									<WordpressSVG />
									<SymfonySVG />
								</div>
							</div>
						</div>
					</Col>
					<Col direction="right" bg="--bg-dark" align="flex-start">
						<h1 className="--uppercase">
							<span className="--hide">Thomas Claireau</span>
							<span>About me</span>
						</h1>
						<div className="texte">
							<p>
								Run outside as soon as door open. Eat all the power cords refuse to
								drink water except out of someone’s glass purr so eat all the power
								cords but purr, and sit on human meow. Dream about hunting birds.
								Kitty kitty kitty poochy, yet intrigued by the shower.
							</p>
							<p>
								Hiss and stare at nothing then run suddenly away. Stare out the
								window destroy couch, and meow meow loudly just to annoy owners for
								spit up on light gray carpet instead of adjacent linoleum but need
								to chase tail. Stare out the window nap all day claw drapes ask for
								petting and make a weird face.
							</p>
							<p>
								Knock dish off table rub face on owner need to chase tail, yet freak
								human out make funny noise mow mow mow mow mow mow success now
								attack human, attack feet. Present belly, scratch hand when stroked
								pounce on unsuspecting person yet chase mice. Hide head under
								blanket so no one can see. Slap owner’s face until human fills food
								dish.
							</p>
						</div>
					</Col>
				</AboutStyled>
			</Container>
		</>
	);
}

const AboutStyled = styled.div`
	> .left {
		padding: 100px 40px 40px 40px;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-mini']}) {
			padding: 100px 20px 20px 20px;
		}

		div {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
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

				> .children {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}

		.parent {
			&:hover {
				+ .children {
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

		.children {
			margin-top: 25px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
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

				@media screen and (max-width: ${(props) => props.theme.breakpoints['break-mini']}) {
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
		padding: 40px;
		color: ${(props) => props.theme.colors.light};

		.texte {
			width: 80%;
			margin-top: 60px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-header']}) {
				width: 90%;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
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

export default About;
