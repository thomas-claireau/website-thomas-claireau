import { useContext } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BoxContext from 'contexts/BoxContext';

function Menu({ space, className }) {
	const { theme, global } = useContext(BoxContext);

	const router = useRouter();

	const MenuStyled = styled.nav`
		position: absolute;
		bottom: ${(props) => props.space};
		left: ${(props) => props.space};

		@media screen and (max-height: 760px) {
			bottom: 20px;
		}

		&.desktop {
			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				display: none;
			}
		}

		&.mobile {
			display: none;
			margin-top: 50px;
			position: initial;
			bottom: auto;
			left: auto;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				display: inherit;
			}

			ul {
				flex-direction: column;
				padding: 0;

				li {
					&:not(:first-of-type) {
						margin-left: 0px;
						margin-top: 20px;
					}

					a {
						color: ${(props) => props.theme.colors.dark};
						font-weight: 500;

						&.active {
							&:before {
								content: none;
							}
						}
					}
				}
			}
		}

		ul {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			list-style-type: none;

			li {
				font-size: 16px;
				font-weight: 500;
				text-transform: uppercase;

				&:not(:first-of-type) {
					margin-left: 70px;
				}

				a {
					color: ${(props) => props.theme.colors[theme.right]};
					font-weight: 600;

					&.active {
						position: relative;

						&:before {
							content: '';
							width: 70%;
							height: 2px;
							position: absolute;
							bottom: -5px;
							left: 50%;
							transform: translateX(-50%);
							background-color: ${(props) => props.theme.colors[theme.right]};
						}
					}
				}
			}
		}
	`;

	return (
		<MenuStyled space={space} className={className}>
			<ul>
				{global.item_menu_desktop &&
					global.item_menu_desktop.map((item) => {
						const { id, label, link } = item;

						return (
							<li key={id}>
								<Link href={link}>
									<a className={router.pathname === link ? 'active' : ''}>
										{label}
									</a>
								</Link>
							</li>
						);
					})}
			</ul>
		</MenuStyled>
	);
}

export default Menu;
