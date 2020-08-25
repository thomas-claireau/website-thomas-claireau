import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import BoxContext from 'contexts/BoxContext';
import SocialLogos from './SocialLogos';

export default function Header() {
	const router = useRouter();
	const { global } = useContext(BoxContext);
	const { title_box, social_logo, contact_email, contact_label } = global;

	const HeaderStyled = styled.header`
		width: 100%;
		height: 100%;
		position: fixed;
		top: 12px;
		left: 50%;
		transform: translateX(-50%);
		padding: 0 55px;

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			z-index: -1;
		}

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
				color: ${(props) => props.theme.colors.light};

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					color: ${(props) => props.theme.colors.light};
				}

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

	return (
		<HeaderStyled>
			<Global
				styles={css`
					#app {
						&.--menu-open {
							header {
								z-index: 1;
								.top {
									position: initial;
									opacity: 1;
									z-index: 1;
								}
							}
						}
					}
				`}
			/>
			<div className="top">
				<div className="left">
					<Link href="/">
						<a
							className={`title --uppercase ${
								router.pathname === '/' ? 'active' : ''
							}`}
						>
							<span>{title_box}</span>
						</a>
					</Link>
				</div>
				<div className="right">
					<a href={`mailto:${contact_email}`} className="title contact --uppercase">
						<span>{contact_label}</span>
						<i className="fa fa-envelope-o" aria-hidden="true"></i>
					</a>
				</div>
			</div>
			<SocialLogos className="desktop" items={social_logo} />
		</HeaderStyled>
	);
}
