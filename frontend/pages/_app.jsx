import PropTypes from 'prop-types';
import moment from 'moment';

import '../styles/global.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	moment.locale('fr');

	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};
