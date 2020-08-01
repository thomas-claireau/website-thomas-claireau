import styled from '@emotion/styled';

export default function Container({ children }) {
	return <ContainerStyled className="container">{children}</ContainerStyled>;
}

const ContainerStyled = styled.section``;
