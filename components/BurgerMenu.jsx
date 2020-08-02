import styled from '@emotion/styled';

export default function BurgerMenu() {
	const handleClick = function (e) {
		console.log('passe');
	};

	return (
		<BurgerMenuStyled className="burger-menu" onClick={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</BurgerMenuStyled>
	);
}

const BurgerMenuStyled = styled.div`
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	span {
		width: 100%;
		height: 2px;
		display: block;
		background-color: ${(props) => props.theme.colors.light};
		transition: all 0.3s ease-in-out;
		transform: rotate(0deg) translate(0);

		&:not(:first-of-type) {
			margin-top: 5px;
		}
	}
`;
