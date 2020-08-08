import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from 'components/Header';
import HeaderVM from 'components/HeaderVM';
import MenuVM from 'components/MenuVM';
import Router from 'next/router';

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
		<BoxStyled className={`box`}>
			<Header />
			<HeaderVM onClick={handleClick} />
			{menu && <MenuVM onClick={handleClick} />}
			{children}
		</BoxStyled>
	);
}

const BoxStyled = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
	box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.35);

	@media screen and (max-width: ${(props) => props.theme.breakpoints['break-small']}) {
		box-shadow: none;
	}

	> .main-content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			height: auto;
			flex-direction: column;
		}
	}
`;
