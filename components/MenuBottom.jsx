import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import Link from 'next/link';

export default function MenuBottom({ children }) {
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
			<Link href="/works">
				<a>
					<i className="fa fa-code-fork" aria-hidden="true"></i>
					Works
				</a>
			</Link>
			<Link href="/about">
				<a>
					<i className="fa fa-rocket" aria-hidden="true"></i>
					Skills
				</a>
			</Link>
			<a href="mailto:thomas.claireau@gmail.com">
				<i className="fa fa-envelope-o" aria-hidden="true"></i>
				Contact
			</a>
		</MenuBottomStyled>
	);
}
