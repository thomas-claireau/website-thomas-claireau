import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Container from 'components/Container';
import Col from 'components/Col';

export default function Custom404() {
	const NotFoundStyled = styled.div`
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
				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					display: none;
				}
			}

			&.mobile {
				display: none;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					display: inherit;
				}
			}

			&.left {
				align-items: flex-end;
			}
		}
	`;

	return (
		<>
			<Head>
				<meta name="robots" content="noindex"></meta>
			</Head>
			<NotFoundStyled>
				<Col direction="left" bg="--bg-dark" align="center">
					<div className="title h1 left --light desktop">
						<span>404 No</span>
					</div>
					<div className="title h1 left --light mobile">404</div>
				</Col>
				<Col direction="right" bg="--bg-light" align="center">
					<div className="title h1 --dark desktop">
						<span>t Found</span>
					</div>
					<div className="title h1 left --dark mobile">Not Found</div>
				</Col>
			</NotFoundStyled>
		</>
	);
}
