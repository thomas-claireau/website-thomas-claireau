import Router from 'next/router';
import { useState, useEffect } from 'react';
import { Global, css } from '@emotion/core';

import { box } from './index.module.scss';

import Header from 'components/global/header/Header';
import HeaderVM from 'components/global/header/HeaderVM';
import MenuVM from 'components/global/menus/MenuVM';

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

	return (
		<div className={`${box} box`}>
			<Global
				styles={css`
					#app {
						&.--menu-open {
							.box {
								box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.35);

								> section {
									opacity: 0;
								}
							}
						}
					}
				`}
			/>
			<Header />
			<HeaderVM onClick={handleClick} />
			{menu && <MenuVM onClick={handleClick} />}
			{children}
		</div>
	);
}
