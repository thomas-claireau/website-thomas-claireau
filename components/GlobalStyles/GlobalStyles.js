import { Global, css } from '@emotion/core';
import { Modifier } from './Modifier';

const theme = {
	fonts: {
		mainFont: 'Open Sans',
	},
	colors: {
		primary: '#34485e',
		secondary: '#ecf0f0',
	},
	breakpoints: {
		'break-mini': '375px',
		'break-small': '425px',
		'break-tablet': '768px',
		'break-medium': '1024px',
		'break-large': '1210px',
		'break-header': '1400px',
	},
	box: '92%',
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
					background-color: ${theme.colors.primary};

					#__next {
						width: ${theme.box};
						height: ${theme.box};
						position: relative;
						margin: auto;
					}
				}

				*,
				*:before,
				*:after {
					box-sizing: border-box;
				}

				h1,
				.h1 {
					font-size: 56px;
					line-height: 65px;
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
