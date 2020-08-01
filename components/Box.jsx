import styled from '@emotion/styled';
import Header from 'components/Header';

export default function Box({ children }) {
	return (
		<BoxStyled className="box">
			<Header />
			{children}
		</BoxStyled>
	);
}

const BoxStyled = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
	box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.35);

	> section.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		overflow-x: hidden;
		overflow-y: scroll;
	}
`;
