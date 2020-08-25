import styled from '@emotion/styled';

export default function Container({ children }) {
	const ContainerStyled = styled.section`
		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			padding-right: 15px;
			padding-left: 15px;
			padding-bottom: 90px;
		}

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
			padding-right: 10px;
			padding-left: 10px;
		}
	`;

	return <ContainerStyled className="container">{children}</ContainerStyled>;
}
