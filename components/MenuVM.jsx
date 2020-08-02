import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SocialLogos from './SocialLogos';
import BurgerMenu from './BurgerMenu';

export default function MenuVM({ onClick }) {
	const router = useRouter();
	console.log(router);

	const handleClick = function () {
		onClick();
	};

	return (
		<MenuVMStyled className="menu-mobile">
			<BurgerMenu action="close" onClick={handleClick} />
			<SocialLogos className="mobile" />
		</MenuVMStyled>
	);
}

const MenuVMStyled = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.colors.light};
`;
