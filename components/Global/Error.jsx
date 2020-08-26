import React from 'react';
import styled from '@emotion/styled';

export const Error = ({ error }) => {
	const { NODE_ENV } = process.env;

	const ErrorStyled = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		background-color: ${(props) => props.theme.colors.dark};
		z-index: 10000;
		padding: 20px;

		p,
		a {
			text-align: center;
			color: #fff;
			font-size: 20px;
		}

		a {
			text-decoration: underline;
		}
	`;

	error = JSON.parse(JSON.stringify(error)).networkError;

	if (NODE_ENV == 'development') {
		return (
			<ErrorStyled>
				<p>{`Une erreur de type ${error.statusCode} est survenue :`}</p>
				<p>{error.result.errors[0].message}</p>
			</ErrorStyled>
		);
	}

	return (
		<ErrorStyled>
			<p>Une erreur est survenue</p>
			<p>
				Veuillez contacter l'administrateur :
				<a href="mailto:thomas-claireau@gmail.com">thomas-claireau@gmail.com</a>
			</p>
		</ErrorStyled>
	);
};
