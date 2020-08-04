import { ThemeProvider } from 'emotion-theming';
import { theme, GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import Box from 'components/Box';
import ContextWrapper from 'components/ContextWrapper';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

//lib
import 'node_modules/font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	const colorScheme = {
		'/': {
			left: 'dark',
			right: 'light',
		},
		'/about': {
			left: 'light',
			right: 'dark',
		},
		'/404': {
			left: 'dark',
			right: 'light',
		},
	};

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<ContextWrapper colorScheme={colorScheme[router.pathname]}>
						<Box>
							<Component {...pageProps} />
						</Box>
					</ContextWrapper>
				</ThemeProvider>
			</AnimatePresence>
		</>
	);
}

export default MyApp;
