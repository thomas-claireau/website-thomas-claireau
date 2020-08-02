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
				<h1 className="--hide">Thomas Claireau, Fullstack Web Developper</h1>
				<Col direction="left" bg="dark">
					<TitleStyled className="h1 left --light desktop">
						<span>I'm a fu</span>
						<span>web dev</span>
					</TitleStyled>
					<TitleStyled className="h1 left --light mobile">I'm a fullstack</TitleStyled>
				</Col>
				<Col direction="right" bg="light">
					<TitleStyled className="h1 --dark desktop">
						<span>llstack</span>
						<span>elopper</span>
					</TitleStyled>
					<TitleStyled className="h1 left --dark mobile">web developper</TitleStyled>
				</Col>
			</Container>
		</>
	);
}

const TitleStyled = styled.div`
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
`;

export default Home;
