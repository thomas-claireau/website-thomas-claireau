import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import { menuMobile, contact } from './MenuMobile.module.scss';
import { icon, mobile } from '../MenuItem/MenuItem.module.scss';

import MenuItem from '../MenuItem/MenuItem';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

export default function MenuMobile() {
	return (
		<nav className={menuMobile}>
			<MenuItem className={`${icon} ${mobile}`}>
				<a
					href="https://www.linkedin.com/in/thomas-claireau/"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			</MenuItem>
			<MenuItem className={`${icon} ${mobile}`}>
				<a href="https://www.instagram.com/thomasclaireau/" target="_blank">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</MenuItem>
			<MenuItem className={`${contact} ${mobile}`}>
				<a href="https://github.com/thomas-claireau" target="_blank">
					<FontAwesomeIcon icon={faEnvelopeOpen} />
				</a>
			</MenuItem>
			<MenuItem className={`${icon} ${mobile}`}>
				<a
					href="https://www.facebook.com/thomasclaireau.dev"
					target="_blank"
				>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</MenuItem>
			<MenuItem className={`${icon} ${mobile}`}>
				<a href="https://github.com/thomas-claireau" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</MenuItem>
		</nav>
	);
}
