import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import BurgerMenu from './BurgerMenu';

export default function HeaderVM({ onClick }) {
	const router = useRouter();

	const handleClick = function () {
		onClick();
	};

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

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			background-color: ${(props) => props.theme.colors.dark};
		}

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
					<a className={`title --uppercase ${router.pathname === '/' ? 'active' : ''}`}>
						Thomas / Claireau
					</a>
				</Link>
			</div>
			<div className="right">
				<BurgerMenu action="open" onClick={handleClick} />
			</div>
		</HeaderVMStyled>
	);
}
