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

	&.mobile {
		display: none;
		margin-top: 50px;
		position: initial;
		bottom: auto;
		left: auto;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			display: inherit;
		}

		ul {
			flex-direction: column;
			padding: 0;

			li {
				&:not(:first-of-type) {
					margin-left: 0px;
					margin-top: 20px;
				}

				a {
					color: ${(props) => props.theme.colors.dark};
					font-weight: bold;
				}
			}
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
