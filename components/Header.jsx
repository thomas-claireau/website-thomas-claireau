import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import SocialLogos from './SocialLogos';

export default function Header() {
	return (
		<HeaderStyled>
			<Global
				styles={css`
					#__next.--menu-open {
						header {
							z-index: -1;

							.top {
								position: initial;
								opacity: 1;
								z-index: inherit;
							}
						}
					}
				`}
			/>
			<div className="top">
				<div className="left">
					<div className="title --uppercase --light">
						<span>Thomas / Claireau</span>
						<span className="--hide">Fullstack web developper</span>
					</div>
				</div>
				<div className="right">
					<a
						href="mailto:contact@thomas-claireau.fr"
						className="title contact --uppercase --light"
					>
						<span>Contact</span>
						<i className="fa fa-envelope-o" aria-hidden="true"></i>
					</a>
				</div>
			</div>
			<SocialLogos className="desktop" />
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

	@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
		padding: 0 20px;
	}

	.top {
		display: flex;
		justify-content: space-between;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			position: absolute;
			opacity: 0;
			z-index: -1;
		}

		.title {
			font-size: 15px;
			font-weight: bold;
			line-height: 20px;
			letter-spacing: 1.5px;

			i {
				margin-left: 10px;
			}
		}

		.right {
			span {
				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-small']}) {
					display: none;
				}
			}
		}
	}
`;
