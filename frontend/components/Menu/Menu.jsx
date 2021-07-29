import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faInstagram,
	faGithub,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import { menu } from './Menu.module.scss';
import {
	blog,
	icon,
	contact,
	toggleTheme,
	light,
	dark,
	lightImg,
	darkImg,
	icons,
} from '../MenuItem/MenuItem.module.scss';

import MenuItem from '../MenuItem/MenuItem';
import Button from '../Button/Button';

import Sun from 'public/assets/img/sun.svg';
import Moon from 'public/assets/img/moon.svg';

export default function Menu() {
	const [toggle, setToggle] = useState(light);

	function handleClick() {
		setToggle(toggle == light ? dark : light);
	}

	return (
		<nav className={menu}>
			<MenuItem className={icon}>
				<a
					href="https://www.linkedin.com/in/thomas-claireau/"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			</MenuItem>
			<MenuItem className={icon}>
				<a href="https://www.instagram.com/thomasclaireau/" target="_blank">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</MenuItem>
			<MenuItem className={icon}>
				<a
					href="https://www.facebook.com/thomasclaireau.dev"
					target="_blank"
				>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</MenuItem>
			<MenuItem className={icon}>
				<a href="https://github.com/thomas-claireau" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</MenuItem>
			<MenuItem className={contact}>
				<Button
					icon="far fa-envelope-open"
					text="Contactez-moi"
					url="#contact"
					type="cta"
				/>
			</MenuItem>
			<MenuItem className={blog}>
				<a href="/blog/">Blog</a>
			</MenuItem>
			<MenuItem className={`${toggleTheme} ${toggle}`} onClick={handleClick}>
				<div className={icons}>
					<Sun className={lightImg} />
					<Moon className={darkImg} />
				</div>
				<span></span>
			</MenuItem>
		</nav>
	);
}
