import styled from '@emotion/styled';

export default function Header() {
	return <HeaderStyled>I'm a frame component</HeaderStyled>;
}

const HeaderStyled = styled.header`
	background-color: ${(props) => props.theme.colors.primary};
	color: #fff;
`;
