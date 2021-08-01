import { header, left, scrolled } from './Header.module.scss';

import Menu from '../Menu/Menu';
import MenuMobile from '../MenuMobile/MenuMobile';
import Container from '../Container/Container';
import { useState, useEffect } from 'react';

export default function Header() {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	function handleScroll() {
		setScroll(window.scrollY);
	}

	return (
		<header className={`${header} ${scroll > 0 ? scrolled : ''}`}>
			<Container>
				<div className={left}>
					Thomas
					<span>/</span>
					Claireau
				</div>
				<Menu />
				<MenuMobile />
			</Container>
		</header>
	);
}
