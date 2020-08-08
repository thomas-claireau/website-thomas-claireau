import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Container from 'components/Container';
import Col from 'components/Col';
import ContentVM from 'components/ContentVM';
import SliderWorks from 'components/SliderWorks';

function Home() {
	return (
		<>
			<Head>
				<title>Thomas Claireau | Fullstack Web Developer</title>
			</Head>
			<Container>
				<HomeStyled>
					<Col direction="left" bg="--bg-dark" align="center">
						<h1 className="--hide">I'm a fullstack web developper</h1>
						<div className="title h1 left --light desktop">
							<span>I'm a fu</span>
							<span>web dev</span>
						</div>
					</Col>
					<Col direction="right" bg="--bg-light" align="center">
						<div className="title h1 --dark desktop">
							<span>llstack</span>
							<span>elopper</span>
						</div>
					</Col>
					<ContentVM>
						<h1>I'm a fullstack web developper</h1>
						<SliderWorks></SliderWorks>
					</ContentVM>
				</HomeStyled>
			</Container>
		</>
	);
}

const HomeStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
		flex-direction: column;
	}

	.title {
		display: flex;
		flex-direction: column;

		&.desktop {
			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				display: none;
			}
		}

		&.mobile {
			display: none;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				display: inherit;
			}
		}

		&.left {
			align-items: flex-end;
		}
	}
`;

export default Home;
