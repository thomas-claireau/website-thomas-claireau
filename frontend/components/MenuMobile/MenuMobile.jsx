import { menuMobile } from './MenuMobile.module.scss';

import MenuItem from '../MenuItem/MenuItem';

export default function MenuMobile() {
	return (
		<nav className={menuMobile}>
			<MenuItem>
				<a
					href="https://www.linkedin.com/in/thomas-claireau/"
					target="_blank"
				>
					<i className="fab fa-linkedin-in"></i>
				</a>
			</MenuItem>
			<MenuItem>
				<a href="https://www.instagram.com/thomasclaireau/" target="_blank">
					<i className="fab fa-instagram"></i>
				</a>
			</MenuItem>
			<MenuItem>
				<a href="https://github.com/thomas-claireau" target="_blank">
					<i className="far fa-envelope-open"></i>
				</a>
			</MenuItem>
			<MenuItem>
				<a
					href="https://www.facebook.com/thomasclaireau.dev"
					target="_blank"
				>
					<i className="fab fa-facebook"></i>
				</a>
			</MenuItem>
			<MenuItem>
				<a href="https://github.com/thomas-claireau" target="_blank">
					<i className="fab fa-github"></i>
				</a>
			</MenuItem>
		</nav>
	);
}
