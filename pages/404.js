import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Container from 'components/Container';

export default function Custom404() {
	return (
		<>
			<Head>
				<title>Thomas Claireau | 404 Not Found</title>
			</Head>
			<Container>
				<NotFoundStyled className="main-content">coucou</NotFoundStyled>
			</Container>
		</>
	);
}

const NotFoundStyled = styled.div``;
