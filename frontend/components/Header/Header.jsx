import { header, left } from './Header.module.scss';

import Menu from '../Menu/Menu';
import MenuMobile from '../MenuMobile/MenuMobile';
import Container from '../Container/Container';

export default function Header() {
	return (
		<header className={header}>
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
