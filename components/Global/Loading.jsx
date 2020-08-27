import React from 'react';
import styled from '@emotion/styled';

import Loader from 'public/assets/img/loader.svg';

export const Loading = ({}) => {
	const LoadingStyled = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #34485e;
		z-index: 10000;

		p,
		a {
			text-align: center;
			color: #fff;
			font-size: 20px;
		}

		a {
			text-decoration: underline;
		}

		svg {
			width: 100px;
			stroke: #ecf0f0;
			stroke-width: 1.5px;

			@media screen and (max-width: 768px) {
				width: 70px;
			}

			@media screen and (max-width: 425px) {
				width: 50px;
			}

			#teabag {
				stroke-width: 0.5px;
				transform-origin: top center;
				transform: rotate(3deg);
				animation: swing 2s infinite;
			}

			#steamL {
				stroke-dasharray: 13;
				stroke-dashoffset: 13;
				animation: steamLarge 2s infinite;
			}

			#steamR {
				stroke-dasharray: 9;
				stroke-dashoffset: 9;
				animation: steamSmall 2s infinite;
			}

			@keyframes swing {
				50% {
					transform: rotate(-3deg);
				}
			}

			@keyframes steamLarge {
				20% {
					stroke-dashoffset: 13;
					opacity: 0.8;
				}

				100% {
					stroke-dashoffset: 39;
					opacity: 0;
				}
			}

			@keyframes steamSmall {
				30% {
					stroke-dashoffset: 9;
					opacity: 1;
				}

				80% {
					stroke-dashoffset: 27;
					opacity: 0;
				}

				100% {
					stroke-dashoffset: 27;
					opacity: 0;
				}
			}
		}
	`;

	return (
		<LoadingStyled>
			<Loader></Loader>
		</LoadingStyled>
	);
};
