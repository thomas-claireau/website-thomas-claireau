import { Global, css } from '@emotion/core';
import { Modifier } from './Modifier';

const theme = {
	fonts: {
		mainFont: 'Open Sans',
	},
	colors: {
		dark: '#34485e',
		light: '#ecf0f0',
	},
	breakpoints: {
		'break-mini': '375px',
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

					#__next {
						width: 100%;
						height: 100%;
						position: relative;
						padding: 45px 55px;
						transition: all 0.3s ease-in-out;

						@media screen and (max-width: ${theme.breakpoints['break-large']}) {
							padding: 0;
							transition: all 0.3s ease-in-out;
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
					font-size: 65px;
					line-height: 65px;
					font-weight: bold;
					letter-spacing: 1.96px;
				}

				a {
					display: block;
					text-decoration: none;
				}
			`}
		/>
	</>
);

export { theme, GlobalStyles };
