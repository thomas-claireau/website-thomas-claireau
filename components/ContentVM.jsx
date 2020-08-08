import styled from '@emotion/styled';
import Container from 'components/Container';
import MenuBottom from 'components/MenuBottom';
import SliderWorks from 'components/SliderWorks';

export default function ContentVM({ children }) {
	const ContentVMStyled = styled.div`
		width: 100%;
		height: 100%;
		display: none;
		margin: 100px 0 50px 0;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			display: inherit;
		}

		/* @media screen and (max-width: ${(props) => props.theme.breakpoints['break-mini']}) {
			margin-top: 250px;
		} */

		> .container {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
		}
	`;

	return (
		<ContentVMStyled className="content-vm">
			<Container>
				{children}
				<MenuBottom></MenuBottom>
				<SliderWorks></SliderWorks>
			</Container>
		</ContentVMStyled>
	);
}
