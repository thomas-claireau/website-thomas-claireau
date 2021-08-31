import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import style from './Layout.module.scss';

export default function Layout({ children }) {
	return (
		<div className={style['layout']}>
			<Head>
				<title>Thomas Claireau - Développeur PHP Symfony</title>
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
