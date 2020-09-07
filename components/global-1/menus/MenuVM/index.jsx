import { useContext } from 'react';
import { useRouter } from 'next/router';

import styles, { title } from './index.module.scss';

import SocialLogos from 'components/global/SocialLogos/index';
import BurgerMenu from 'components/global/menus/BurgerMenu/index';
import Menu from 'components/global/menus/Menu/index';
import BoxContext from 'contexts/BoxContext';

function ActualPage({ menu }) {
	const router = useRouter();
	let actualPage;

	menu.forEach((item) => {
		if (item.link == router.pathname) actualPage = item.label;
	});

	if (router.pathname == '/projets/[slug]') actualPage = 'Projets';

	return <div className={`${title} h1 --uppercase`}>{actualPage}</div>;
}

export default function MenuVM({ onClick }) {
	const { global } = useContext(BoxContext);

	const handleClick = function () {
		onClick();
	};

	return (
		<div className={styles['menu-vm']}>
			<BurgerMenu action="close" onClick={handleClick} />
			<ActualPage menu={global.item_menu_desktop} />
			<Menu view="mobile" />
			<SocialLogos view="mobile" items={global.social_logo} />
		</div>
	);
}
