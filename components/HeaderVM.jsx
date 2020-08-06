import { useContext } from 'react';
import Link from 'next/link';
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
		padding: 30px;
		position: absolute;
		top: 0px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
			padding: 30px 20px;
		}

		.title {
			font-size: 15px;
			font-weight: bold;
			line-height: 20px;
			letter-spacing: 1.5px;
			color: ${(props) => props.theme.colors.light};

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
					#app.--menu-open {
						.header-mobile {
							display: none;
						}
					}
				`}
			/>
			<div className="left">
				<Link href="/">
					<a className="title --uppercase">Thomas / Claireau</a>
				</Link>
			</div>
			<div className="right">
				<BurgerMenu action="open" onClick={handleClick} />
			</div>
		</HeaderVMStyled>
	);
}
