import { menu } from './Menu.module.scss';

import MenuItem from '../MenuItem/MenuItem';
import Button from '../Button/Button';

export default function Menu() {
	return (
		<nav className={menu}>
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
			<MenuItem>
				<Button
					icon="far fa-envelope-open"
					text="Contactez-moi"
					url="#contact"
					type="cta"
				/>
			</MenuItem>
			<MenuItem>
				<a href="/blog/" className="--uppercase">
					Blog
				</a>
			</MenuItem>
			<MenuItem>
				<div className="icons">
					<img src="/img/sun.svg" className="light js-inject-me" />
					<img src="/img/moon.svg" className="dark js-inject-me" />
				</div>
				<span></span>
			</MenuItem>
		</nav>
	);
}
