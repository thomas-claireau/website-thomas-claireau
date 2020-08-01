import styled from '@emotion/styled';

export default function Header() {
	return (
		<HeaderStyled>
			<div className="top">
				<div className="title --uppercase --light">
					<span>Thomas / Claireau</span>
					<span className="--hide">Fullstack web developper</span>
				</div>
				<a
					href="mailto:contact@thomas-claireau.fr"
					className="title contact --uppercase --light"
				>
					Contact
					<i className="fa fa-envelope-o" aria-hidden="true"></i>
				</a>
			</div>
			<div className="pictos">
				<a
					href="https://github.com/thomas-claireau"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa fa-github-alt" aria-hidden="true"></i>
				</a>
				<a
					href="https://twitter.com/thomas_claireau"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa fa-twitter" aria-hidden="true"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/thomas-claireau/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa fa-linkedin" aria-hidden="true"></i>
				</a>
			</div>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 12px;
	left: 50%;
	transform: translateX(-50%);
	padding: 0 55px;

	.top {
		display: flex;
		justify-content: space-between;

		.title {
			font-size: 15px;
			font-weight: bold;
			line-height: 20px;
			letter-spacing: 1.5px;

			i {
				margin-left: 10px;
			}
		}
	}

	.pictos {
		position: absolute;
		top: 50%;
		right: 19px;
		transform: translateY(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		a {
			&:not(:first-of-type) {
				margin-top: 15px;
			}

			i {
				color: ${(props) => props.theme.colors.light};
				font-size: 20px;
			}
		}
	}
`;
