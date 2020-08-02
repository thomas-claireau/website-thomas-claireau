import styled from '@emotion/styled';
import BurgerMenu from './BurgerMenu';

export default function HeaderVM() {
	return (
		<HeaderVMStyled>
			<div className="left">
				<div className="title --uppercase --light">Thomas / Claireau</div>
			</div>
			<div className="right">
				<BurgerMenu />
			</div>
		</HeaderVMStyled>
	);
}

const HeaderVMStyled = styled.div`
	width: 100%;
	display: none;
	justify-content: space-between;
	position: fixed;
	top: 0px;
	left: 50%;
	transform: translateX(-50%);
	padding: 30px 55px;
	z-index: 2;

	.title {
		font-size: 15px;
		font-weight: bold;
		line-height: 20px;
		letter-spacing: 1.5px;

		i {
			margin-left: 10px;
		}
	}

	@media screen and (max-width: ${(props) => props.theme.breakpoints['break-medium']}) {
		display: flex;
	}
`;
