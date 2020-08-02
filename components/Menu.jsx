import styled from '@emotion/styled';

export default function Menu({ space, className }) {
	return (
		<MenuStyled space={space} className={className}>
			<ul>
				<li>
					<a href="/about/">About</a>
				</li>
				<li>
					<a href="/works/">Works</a>
				</li>
				<li>
					<a href="/blog/">Blog</a>
				</li>
			</ul>
		</MenuStyled>
	);
}

const MenuStyled = styled.nav`
	position: absolute;
	bottom: ${(props) => props.space};
	left: ${(props) => props.space};

	&.desktop {
		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			display: none;
		}
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		list-style-type: none;

		li {
			font-size: 16px;
			font-weight: 500;
			text-transform: uppercase;

			&:not(:first-of-type) {
				margin-left: 70px;
			}

			a {
				color: ${(props) => props.theme.colors.light};
			}
		}
	}
`;
