import { Global, css } from '@emotion/core';

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
		<Global styles={css``} />
	</>
);

export { theme, GlobalStyles };
