import { cloneElement } from 'react';
import styled from '@emotion/styled';
import Header from 'components/Header';
import HeaderVM from 'components/HeaderVM';

export default function Box({ children }) {
	return (
		<BoxStyled className="box">
			<Header />
			<HeaderVM />
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		overflow-x: hidden;
		overflow-y: scroll;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			flex-direction: column;
			overflow: visible;
		}
	}
`;
