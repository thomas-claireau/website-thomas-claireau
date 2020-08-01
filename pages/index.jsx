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
					<TitleStyled className="h1 left --light">
						<span>I'm a fu</span>
						<span>web dev</span>
					</TitleStyled>
				</Col>
				<Col direction="right" bg="light">
					<TitleStyled className="h1 --dark">
						<span>llstack</span>
						<span>elopper</span>
					</TitleStyled>
				</Col>
			</Container>
		</>
	);
}

const TitleStyled = styled.div`
	display: flex;
	flex-direction: column;

	&.left {
		align-items: flex-end;
	}
`;

export default Home;
