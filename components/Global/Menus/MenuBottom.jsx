import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import Link from 'next/link';
import { useContext } from 'react';

import BoxContext from 'contexts/BoxContext';

function MenuBottom({ children }) {
	const { global } = useContext(BoxContext);

	const MenuBottomStyled = styled.div`
		width: 100%;
		display: none;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 15px 20px;
		background-color: ${(props) => props.theme.colors.light};
		z-index: 10000;
		box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.2);

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			display: flex;
		}

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			color: ${(props) => props.theme.colors.dark};
			font-weight: bold;

			i {
				margin-bottom: 5px;
			}
		}
	`;

	return (
		<MenuBottomStyled className="menu-bottom">
			<Global
				styles={css`
					#app.--menu-open {
						.menu-bottom {
							display: none;
						}
					}
				`}
			/>
			{global.menu_bottom_mobile &&
				global.menu_bottom_mobile.map((item) => {
					const { id, label, link, slug_picto_fontawesome: picto, interne_link } = item;
					return interne_link ? (
						<Link key={id} href={link}>
							<a>
								<i className={picto} aria-hidden="true"></i>
								{label}
							</a>
						</Link>
					) : (
						<a key={id} href={link}>
							<i className={picto} aria-hidden="true"></i>
							{label}
						</a>
					);
				})}
		</MenuBottomStyled>
	);
}

export default MenuBottom;
