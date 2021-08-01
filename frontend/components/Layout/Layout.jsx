import PropTypes from 'prop-types';

import Head from 'next/head';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Thomas Claireau - Développeur PHP Symfony</title>
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
