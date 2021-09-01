import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useThemeContext } from '../ThemeProvider';

import Menu from '../Menu/Menu';
import MenuMobile from '../MenuMobile/MenuMobile';
import Container from '../Container/Container';
import HtmlContent from '../HtmlContent/HtmlContent';

import style from './Header.module.scss';

export default function Header() {
	const [scrolled, setScrolled] = useState(0);

	const { header } = useThemeContext();

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
					{header.logo.condition == 'text' ? (
						<a className={style['left']}>
							<HtmlContent>{header.logo.text}</HtmlContent>
						</a>
					) : (
						<a className={style['left']}>
							<img
								src={header.logo.image.url}
								alt={header.logo.image.alt}
							/>
						</a>
					)}
				</Link>
				<Menu items={header.menus.items} />
				<MenuMobile items={header.menus.items} />
			</Container>
		</header>
	);
}
