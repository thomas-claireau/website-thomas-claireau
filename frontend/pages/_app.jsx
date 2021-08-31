import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import https from 'https';
import 'moment/locale/fr';

import Head from 'next/head';
import { ThemeProvider } from '../components/ThemeProvider';

import '../styles/global.scss';

if (process.env.NODE_ENV === 'development') {
	axios.defaults.httpsAgent = new https.Agent({
		rejectUnauthorized: false,
	});
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; // TODO: temporaire -> attendre le vrai certificat SSL du back

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	const { global } = pageProps;

	return (
		<ThemeProvider value={global}>
			<Head>
				<link
					rel="stylesheet"
					href="/assets/css/fontawesome.min.css"
					referrerpolicy="no-referrer"
				/>
				<script
					src="/assets/js/fontawesome.min.js"
					referrerpolicy="no-referrer"
				></script>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};
