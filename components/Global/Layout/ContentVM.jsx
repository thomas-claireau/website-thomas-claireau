import styled from '@emotion/styled';
import MenuBottom from 'components/Global/Menus/MenuBottom';

export default function ContentVM({ children }) {
	const ContentVMStyled = styled.div`
		width: 100%;
		height: 100%;
		display: none;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 170px 0 150px 0;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			display: flex;
		}

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
			margin: 100px 0 150px 0;
		}
	`;

	return (
		<ContentVMStyled className="content-vm">
			{children}
			<MenuBottom></MenuBottom>
		</ContentVMStyled>
	);
}
