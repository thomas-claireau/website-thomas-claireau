import Router from 'next/router';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import Header from 'components/Global/Header/Header';
import HeaderVM from 'components/Global/Header/HeaderVM';
import MenuVM from 'components/Global/Menus/MenuVM';

export default function Box({ children }) {
	const [menu, setMenu] = useState(false);

	const handleClick = function () {
		const app = document.querySelector('#app');

		if (!app) return;

		app.classList.toggle('--menu-open');
		setMenu(!menu);
	};

	const handleRouteChange = function () {
		const app = document.querySelector('#app');

		if (!app) return;

		app.classList.remove('--menu-open');

		setMenu(false);
	};

	useEffect(() => {
		Router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			Router.events.off('routeChangeStart', handleRouteChange);
		};
	}, []);

	const BoxStyled = styled.section`
		width: 100%;
		height: 100%;
		position: relative;
		box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.35);

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			box-shadow: none;
		}

		> .main-content {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				height: 100%;
				flex-direction: column;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
				height: auto;
			}
		}
	`;

	return (
		<BoxStyled className={`box`}>
			<Global
				styles={css`
					#app {
						&.--menu-open {
							.box {
								box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.35);
							}
						}
					}
				`}
			/>
			<Header />
			<HeaderVM onClick={handleClick} />
			{menu && <MenuVM onClick={handleClick} />}
			{children}
		</BoxStyled>
	);
}
