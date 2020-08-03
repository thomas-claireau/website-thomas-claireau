import { useContext } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import BurgerMenu from './BurgerMenu';
import BoxContext from '../contexts/BoxContext';

export default function HeaderVM({ onClick }) {
	const { theme } = useContext(BoxContext);

	const HeaderVMStyled = styled.div`
		width: 100%;
		display: none;
		justify-content: space-between;
		padding: 30px 55px;
		position: fixed;
		top: 0px;
		left: 50%;
		transform: translateX(-50%);
		background-color: ${(props) => props.theme.colors[theme.left]};
		z-index: 2;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
			padding: 30px 20px;
		}

		.title {
			font-size: 15px;
			font-weight: bold;
			line-height: 20px;
			letter-spacing: 1.5px;
			color: ${(props) => props.theme.colors[theme.right]};

			i {
				margin-left: 10px;
			}
		}

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			display: flex;
		}
	`;

	const handleClick = function () {
		onClick();
	};

	return (
		<HeaderVMStyled className="header-mobile">
			<Global
				styles={css`
					#__next.--menu-open {
						.header-mobile {
							display: none;
						}
					}
				`}
			/>
			<div className="left">
				<div className="title --uppercase">Thomas / Claireau</div>
			</div>
			<div className="right">
				<BurgerMenu action="open" onClick={handleClick} />
			</div>
		</HeaderVMStyled>
	);
}
