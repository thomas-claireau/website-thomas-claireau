import { header, left, scrolled } from './Header.module.scss';

import Menu from '../Menu/Menu';
import MenuMobile from '../MenuMobile/MenuMobile';
import Container from '../Container/Container';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	function handleScroll() {
		setScroll(window.scrollY);
	}

	return (
		<header className={`${header} ${scroll > 0 ? scrolled : ''}`}>
			<Container>
				<Link href="/">
					<a className={left}>
						Thomas
						<span>/</span>
						Claireau
					</a>
				</Link>
				<Menu />
				<MenuMobile />
			</Container>
		</header>
	);
}
