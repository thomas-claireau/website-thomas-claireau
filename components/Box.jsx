import { useState, useContext } from 'react';
import styled from '@emotion/styled';
import Header from 'components/Header';
import HeaderVM from 'components/HeaderVM';
import MenuVM from 'components/MenuVM';

export default function Box({ children }) {
	const [menu, setMenu] = useState(false);

	const handleClick = function () {
		const app = document.querySelector('#app');

		if (!app) return;

		app.classList.toggle('--menu-open');
		setMenu(!menu);
	};

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

	> section.container {
		width: 100%;
		height: 100%;
		position: relative;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			overflow: auto;
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
	}
`;
