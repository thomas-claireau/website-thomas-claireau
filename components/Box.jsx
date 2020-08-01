import styled from '@emotion/styled';

export default function Box({ children }) {
	return <BoxStyled className="box">{children}</BoxStyled>;
}

const BoxStyled = styled.section``;
