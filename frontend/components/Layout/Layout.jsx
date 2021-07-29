import Head from 'next/head';

import Header from '../Header/Header';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Thomas Claireau - Développeur PHP Symfony</title>
			</Head>
			<Header />
			{children}
		</>
	);
}
