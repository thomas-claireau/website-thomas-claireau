import styled from '@emotion/styled';

export default function BurgerMenu({ action, onClick }) {
	const handleClick = function (e) {
		onClick();
	};

	return (
		<BurgerMenuStyled className={`burger-menu ${action}`} onClick={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</BurgerMenuStyled>
	);
}

const BurgerMenuStyled = styled.div`
	width: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&.open {
		span {
			background-color: ${(props) => props.theme.colors.light};
		}
	}

	&.close {
		position: absolute;
		top: 30px;
		right: 30px;

		span {
			height: 2.4px;
			background-color: ${(props) => props.theme.colors.dark};

			&:nth-of-type(1) {
				transform: rotate(45deg);
			}

			&:nth-of-type(2) {
				transform: rotate(-45deg) translate(5px, -4px);
			}

			&:last-of-type {
				display: none;
			}
		}
	}

	span {
		width: 100%;
		height: 2px;
		display: block;
		transition: all 0.3s ease-in-out;
		transform: rotate(0deg) translate(0);

		&:not(:first-of-type) {
			margin-top: 5px;
		}
	}
`;
