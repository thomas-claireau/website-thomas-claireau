import { ThemeProvider } from 'emotion-theming';
import { theme, GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import Box from 'components/Box';

//lib
import 'node_modules/font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Box>
					<Component {...pageProps} />
				</Box>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
