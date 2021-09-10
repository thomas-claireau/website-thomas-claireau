import PropTypes from 'prop-types';
import axios from 'axios';
import https from 'https';
import 'moment/locale/fr';
import Head from 'next/head';

import { ThemeProvider } from '../components/ThemeProvider';
import Contact from '../components/Contact/Contact';

import '../styles/global.scss';
import 'public/assets/css/fontawesome.min.css';

if (process.env.NODE_ENV === 'development') {
	axios.defaults.httpsAgent = new https.Agent({
		rejectUnauthorized: false,
	});

	process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	const { global } = pageProps;

	return (
		<ThemeProvider value={global}>
			<Head>
				<script
					src="/assets/js/fontawesome.min.js"
					referrerPolicy="no-referrer"
					defer
				></script>
			</Head>
			<Component {...pageProps} />
			<Contact />
		</ThemeProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
	fields: PropTypes.object,
};
