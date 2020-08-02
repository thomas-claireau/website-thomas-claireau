import { useState } from 'react';
import styled from '@emotion/styled';
import Header from 'components/Header';
import HeaderVM from 'components/HeaderVM';
import MenuVM from 'components/MenuVM';

export default function Box({ children }) {
	const [menu, setMenu] = useState(false);

	const handleClick = function () {
		const __next = document.querySelector('#__next');

		if (!__next) return;

		__next.classList.toggle('--menu-open');
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
		overflow-x: hidden;
		overflow-y: scroll;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			overflow: visible;
		}

		> .main-content {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				flex-direction: column;
			}
		}
	}
`;
