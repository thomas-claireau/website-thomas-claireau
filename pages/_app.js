import { ThemeProvider } from 'emotion-theming';
import { theme, GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import Header from 'components/Header';
import Box from 'components/Box';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<Box>
					<Component {...pageProps} />
				</Box>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
