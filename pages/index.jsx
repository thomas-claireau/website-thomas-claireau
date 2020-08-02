import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Container from 'components/Container';
import Col from 'components/Col';

function Home() {
	return (
		<>
			<Head>
				<title>Thomas Claireau | Fullstack Web Developer</title>
			</Head>
			<Container>
				<HomeStyled>
					<h1 className="--hide">Thomas Claireau, Fullstack Web Developper</h1>
					<Col direction="left" bg="--bg-dark" align="center">
						<div className="title h1 left --light desktop">
							<span>I'm a fu</span>
							<span>web dev</span>
						</div>
						<div className="title h1 left --light mobile">I'm a fullstack</div>
					</Col>
					<Col direction="right" bg="--bg-light" align="center">
						<div className="title h1 --dark desktop">
							<span>llstack</span>
							<span>elopper</span>
						</div>
						<div className="title h1 left --dark mobile">web developper</div>
					</Col>
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
