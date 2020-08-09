import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import Link from 'next/link';
import { useContext } from 'react';
import BoxContext from '../contexts/BoxContext';

export default function MenuBottom({ children }) {
	const { global_informations } = useContext(BoxContext);
	const { menu_bottom_mobile: menu } = global_informations;

	const MenuBottomStyled = styled.div`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 15px 20px;
		background-color: ${(props) => props.theme.colors.light};
		z-index: 10000;

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
			{menu.map((item) => {
				const { id, label, link, picto_fontawesome: picto, interne_link } = item;
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
