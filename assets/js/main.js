import '../scss/style.scss';

import '@fortawesome/fontawesome-free/js/all.js';

import { injectSvgs } from './global/functions';
import './global/header';
import './global/footer';
import './pages/index';

document.addEventListener('DOMContentLoaded', () => {
	injectSvgs();
});
