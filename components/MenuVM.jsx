import styled from '@emotion/styled';
import SocialLogos from './SocialLogos';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';

export default function MenuVM({ onClick }) {
	const handleClick = function () {
		onClick();
	};

	return (
		<MenuVMStyled className="menu-mobile">
			<BurgerMenu action="close" onClick={handleClick} />
			<div className="title h1 --uppercase">Home</div>
			<Menu className="mobile" />
			<SocialLogos className="mobile" />
		</MenuVMStyled>
	);
}

const MenuVMStyled = styled.div`
	width: 100%;
	height: 100%;
	padding: 100px 50px;
	background-color: ${(props) => props.theme.colors.light};

	@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
		padding: 100px 30px;
	}

	.title {
		color: ${(props) => props.theme.colors.dark};
	}
`;