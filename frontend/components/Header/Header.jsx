import { header, left } from './Header.module.scss';

import Menu from '../Menu/Menu';
import MenuMobile from '../MenuMobile/MenuMobile';

export default function Header() {
	return (
		<header className={header}>
			<div className={left}>
				Thomas
				<span>/</span>
				Claireau
			</div>
			<Menu />
			<MenuMobile />
		</header>
	);
}
