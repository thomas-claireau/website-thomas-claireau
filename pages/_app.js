import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import Header from 'components/Header';

const theme = {
	fonts: {
		mainFont: 'OpenSans',
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

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
