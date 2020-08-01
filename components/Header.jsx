import styled from '@emotion/styled';

export default function Header() {
	return (
		<HeaderStyled>
			<div className="title --uppercase --light">
				<span>Thomas / Claireau</span>
				<span className="--hide">Fullstack web developper</span>
			</div>
			<div className="title contact --uppercase --light">Contact</div>
			<div className="pictos"></div>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	width: ${(props) => props.theme.width};
	position: fixed;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: space-between;

	.title {
		font-size: 15px;
		font-weight: bold;
		line-height: 20px;
		letter-spacing: 1.5px;
	}
`;
