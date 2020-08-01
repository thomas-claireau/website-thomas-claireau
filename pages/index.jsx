import Head from 'next/head';
import styled from '@emotion/styled';

function Home() {
	return (
		<>
			<Head>
				<title>Thomas Claireau | Fullstack Web Developer</title>
			</Head>
			<TestStyled className="test">
				<div className="start">Coucou</div>
				<div className="end">Fin</div>
			</TestStyled>
		</>
	);
}

const TestStyled = styled.div`
	height: 1900px;
	background-color: gray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;

export default Home;
