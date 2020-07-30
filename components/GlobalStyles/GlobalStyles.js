import { Global, css } from '@emotion/core';

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
};

const GlobalStyles = () => (
	<>
		<Global
			styles={css`
				body {
					margin: 0;
					padding: 0;
					font-family: ${theme.fonts.mainFont};
				}

				*,
				*:before,
				*:after {
					box-sizing: border-box;
				}
			`}
		/>
	</>
);

export { theme, GlobalStyles };
