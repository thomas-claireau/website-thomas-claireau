import React from 'react';
import Head from 'next/head';
import Col from 'components/Global/Layout/Col';

import styles, { title, left, desktop, mobile } from 'styles/pages/404.module.scss';

export default function Custom404() {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex"></meta>
			</Head>
			<div className={styles['not-found']}>
				<Col direction="left" bg="--bg-dark" align="center">
					<div className={`${title} ${left} ${desktop} h1 --light`}>
						<span>404 No</span>
					</div>
					<div className={`${title} ${left} ${mobile} h1 --light`}>404</div>
				</Col>
				<Col direction="right" bg="--bg-light" align="center">
					<div className={`${title} ${desktop} h1 --dark`}>
						<span>t Found</span>
					</div>
					<div className={`${title} ${left} ${mobile} h1 --dark`}>Not Found</div>
				</Col>
			</div>
		</>
	);
}
