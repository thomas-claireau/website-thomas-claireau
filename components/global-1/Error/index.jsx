import React from 'react';

import styles from './index.module.scss';

export const Error = ({ error }) => {
	const { NODE_ENV } = process.env;

	const parseError = JSON.parse(JSON.stringify(error)).networkError;

	if (NODE_ENV == 'development') {
		console.log(error);

		return (
			<div className={styles.error}>
				<p>{`Une erreur de type ${parseError.statusCode} est survenue :`}</p>
				<p>{parseError.result.errors[0].message}</p>
			</div>
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
