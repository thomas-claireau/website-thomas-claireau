import { Global, css } from '@emotion/core';
import { Modifier } from './Modifier';

const theme = {
	fonts: {
		mainFont: 'Open Sans',
	},
	colors: {
		dark: '#34485e',
		light: '#ecf0f0',
		link: '#6565cd',
	},
	breakpoints: {
		'break-mini': '374px',
		'break-small': '425px',
		'break-tablet': '768px',
		'break-medium': '1024px',
		'break-large': '1210px',
		'break-header': '1600px',
		'break-header-xl': '1700px',
	},
};

const GlobalStyles = () => (
	<>
		<Modifier />
		<Global
			styles={css`
				:root {
					--swiper-theme-color: ${theme.colors.dark};
				}

				body {
					width: 100vw;
					height: 100vh;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					position: relative;
					margin: 0;
					padding: 0;
					font-family: ${theme.fonts.mainFont};
					background-color: ${theme.colors.dark};

					@media screen and (max-width: ${theme.breakpoints['break-large']}) {
						background-color: ${theme.colors.dark};
					}

					&.fetching-error {
						overflow: hidden;

						> *:not(.fetching-error) {
							filter: blur(5px);
						}
					}

					#__next {
						width: 100%;
						height: 100%;
					}

					#app {
						width: 100%;
						height: 100%;
						position: relative;
						padding: 45px 55px;
						transition: all 0.3s ease-in-out;

						@media screen and (max-width: ${theme.breakpoints['break-tablet']}) {
							padding: 45px 20px !important;
						}

						&:not(.--menu-open) {
							@media screen and (max-width: ${theme.breakpoints['break-large']}) {
								padding: 0 !important;
							}
						}

						&.--menu-open {
							overflow: hidden;
						}
					}
				}

				*,
				*:before,
				*:after {
					box-sizing: border-box;
				}

				h1,
				.h1 {
					margin: 0;
					font-size: 65px;
					line-height: 65px;
					font-weight: bold;
					letter-spacing: 1.96px;

					@media screen and (max-width: ${theme.breakpoints['break-large']}) {
						width: 80%;
						color: ${theme.colors.light};
					}

					@media screen and (max-width: ${theme.breakpoints['break-tablet']}) {
						width: 100%;
						font-size: 45px;
						line-height: 50px;
						letter-spacing: 1px;
					}

					@media screen and (max-width: ${theme.breakpoints['break-small']}) {
						font-size: 40px;
						line-height: 40px;
					}
				}

				a {
					display: block;
					text-decoration: none;

					&.active {
						pointer-events: none;
					}
				}

				p {
					font-size: 17px;
					margin: 20px 0 0 0;
					padding: 0;
				}
			`}
		/>
	</>
);

export { theme, GlobalStyles };
