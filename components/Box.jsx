import styled from '@emotion/styled';

export default function Box({ children }) {
	return <BoxStyled className="box">{children}</BoxStyled>;
}

const BoxStyled = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
	box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.35);
`;
