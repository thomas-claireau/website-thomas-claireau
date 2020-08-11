import styled from '@emotion/styled';
import { useContext } from 'react';
import BoxContext from '../contexts/BoxContext';
import SocialLogos from './SocialLogos';
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function FetchingError() {
	const { global_informations } = useContext(BoxContext);
	const { social_logo } = global_informations;

	useLayoutEffect(() => {
		const bodyElt = document.querySelector('body');

		if (bodyElt) {
			bodyElt.classList.add('fetching-error');
		}
	});

	const FetchingErrorStyled = styled.div`
		width: 100%;
		height: 100%;
		position: absolute;

		.content {
			width: 800px;
			min-height: 250px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin: auto;
			background-color: ${(props) => props.theme.colors.light};
			color: ${(props) => props.theme.colors.dark};
			box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.35);
			text-align: center;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				width: 80%;
			}

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
				width: 90%;
			}
		}

		.email {
			margin-top: 20px;
			font-size: 25px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-small']}) {
				font-size: 20px;
			}

			a {
				color: ${(props) => props.theme.colors.dark};
			}
		}

		.social-logos {
			position: initial;
			top: auto;
			left: auto;
			right: auto;
			flex-direction: row;
			margin-top: 50px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				display: inherit;
			}

			a {
				&:not(:first-of-type) {
					margin-top: 0;
					margin-left: 20px;
				}

				i {
					color: ${(props) => props.theme.colors.dark};
					font-size: 30px;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-small']}) {
						font-size: 25px;
					}
				}
			}
		}
	`;

	return (
		process.browser &&
		createPortal(
			<FetchingErrorStyled className="fetching-error">
				<div className="content">
					Une erreur est survenu, veuillez contacter l'administrateur :
					<div className="email">
						<a href="mailto:contact@thomas-claireau.fr">contact@thomas-claireau.fr</a>
					</div>
					{social_logo && <SocialLogos className="desktop" items={social_logo} />}
				</div>
			</FetchingErrorStyled>,
			document.body
		)
	);
}
