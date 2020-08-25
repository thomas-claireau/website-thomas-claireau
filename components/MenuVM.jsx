import styled from '@emotion/styled';
import { useContext } from 'react';

import SocialLogos from './SocialLogos';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';
import BoxContext from 'contexts/BoxContext';

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
			<div className="title h1 --uppercase">Home</div>
			<Menu className="mobile" />
			<SocialLogos className="mobile" items={global.social_logo} />
		</MenuVMStyled>
	);
}
