import styled from '@emotion/styled';

export default function Menu({ space }) {
	return (
		<MenuStyled space={space}>
			<ul>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Works</a>
				</li>
				<li>
					<a href="#">Blog</a>
				</li>
			</ul>
		</MenuStyled>
	);
}

const MenuStyled = styled.nav`
	position: absolute;
	bottom: ${(props) => props.space};
	left: ${(props) => props.space};

	ul {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
`;
