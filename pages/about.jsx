import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Container from 'components/Container';
import Col from 'components/Col';

function About() {
	return (
		<>
			<Head>
				<title>Thomas Claireau | About me</title>
			</Head>
			<Container>
				<AboutStyled className="main-content">
					<Col direction="left" bg="--bg-light" align="center"></Col>
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
	.right {
		color: ${(props) => props.theme.colors.light};

		.texte {
			width: 80%;
			margin-top: 60px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-header']}) {
				width: 90%;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				width: 100%;
			}

			> *:first-child {
				margin: 0;
				padding: 0;
			}
		}
	}
`;

export default About;
