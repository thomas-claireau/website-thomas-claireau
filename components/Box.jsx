import styled from '@emotion/styled';
import Header from 'components/Header';

export default function Box({ children }) {
	return (
		<BoxStyled className="box">
			<Header />
			<div>{children}</div>
		</BoxStyled>
	);
}

const BoxStyled = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
	box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.35);

	> div {
		width: 100%;
		height: 100%;
		position: relative;
		overflow-x: hidden;
		overflow-y: scroll;
	}
`;
