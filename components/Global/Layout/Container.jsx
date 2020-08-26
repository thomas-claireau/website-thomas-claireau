import styled from '@emotion/styled';

export default function Container({ children, ...props }) {
	const ContainerStyled = styled.section`
		padding-right: 90px;
		padding-left: 110px;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			padding-right: 15px;
			padding-left: 15px;
			padding-bottom: 90px;
		}

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
			padding-right: 10px;
			padding-left: 10px;
			padding-bottom: 30px;
		}
	`;

	return (
		<ContainerStyled className="container" {...props}>
			{children}
		</ContainerStyled>
	);
}
