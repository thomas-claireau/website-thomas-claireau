import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import https from 'https';

import '../styles/global.scss';
import { useEffect } from 'react';

axios.defaults.httpsAgent = new https.Agent({
	rejectUnauthorized: false,
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	moment.locale('fr');

	useEffect(jsInjectMe, []);

	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};

function jsInjectMe() {
	const svgs = document.querySelectorAll('img.js-inject-me');
	console.log(svgs);
}
