import styled from '@emotion/styled';
import { useContext } from 'react';
import { useRouter } from 'next/router';

import SocialLogos from 'components/Global/SocialLogos';
import BurgerMenu from 'components/Global/Menus/BurgerMenu';
import Menu from 'components/Global/Menus/Menu';
import BoxContext from 'contexts/BoxContext';

function ActualPage({ menu }) {
	const router = useRouter();
	let actualPage;

	menu.forEach((item) => {
		if (item.link == router.pathname) actualPage = item.label;
	});

	if (router.pathname == '/projets/[slug]') actualPage = 'Projets';

	return <div className="title h1 --uppercase">{actualPage}</div>;
}

export default function MenuVM({ onClick }) {
	const { global } = useContext(BoxContext);

	const handleClick = function () {
		onClick();
	};

	const MenuVMStyled = styled.div`
		width: 100%;
		height: 100%;
		position: relative;
		padding: 100px 50px;
		background-color: ${(props) => props.theme.colors.light};
		z-index: 1;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
			padding: 100px 30px;
		}

		.title {
			color: ${(props) => props.theme.colors.dark};
		}
	`;

	return (
		<MenuVMStyled className="menu-mobile">
			<BurgerMenu action="close" onClick={handleClick} />
			<ActualPage menu={global.item_menu_desktop} />
			<Menu className="mobile" />
			<SocialLogos className="mobile" items={global.social_logo} />
		</MenuVMStyled>
	);
}
