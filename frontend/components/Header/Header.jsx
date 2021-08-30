import style from './Header.module.scss';

import Menu from '../Menu/Menu';
import MenuMobile from '../MenuMobile/MenuMobile';
import Container from '../Container/Container';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useThemeContext } from '../ThemeProvider';

export default function Header() {
	const [scrolled, setScrolled] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	function handleScroll() {
		setScrolled(window.scrollY > 0);
	}

	return (
		<header
			className={`${style['header']} ${scrolled ? style['scrolled'] : ''}`}
		>
			<Container>
				<Link href="/">
					<a className={style['left']}>
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
