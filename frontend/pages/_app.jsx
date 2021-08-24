import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import https from 'https';

import '../styles/global.scss';

axios.defaults.httpsAgent = new https.Agent({
	rejectUnauthorized: false,
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	moment.locale('fr');

	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};
