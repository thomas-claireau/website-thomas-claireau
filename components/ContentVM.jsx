import styled from '@emotion/styled';
import Container from 'components/Container';
import MenuBottom from 'components/MenuBottom';
// import SliderWorks from 'components/SliderWorks';

export default function ContentVM({ children }) {
	const ContentVMStyled = styled.div`
		display: none;
		width: 100%;
		height: 100%;
		padding-top: 120px;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			display: inherit;
		}
	`;

	return (
		<ContentVMStyled className="content-vm">
			<Container>
				{children}
				<MenuBottom></MenuBottom>
				{/* <SliderWorks></SliderWorks> */}
			</Container>
		</ContentVMStyled>
	);
}
