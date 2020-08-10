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
			width: 50%;
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
		}

		.social-logos {
			position: initial;
			top: auto;
			left: auto;
			right: auto;
			flex-direction: row;
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
