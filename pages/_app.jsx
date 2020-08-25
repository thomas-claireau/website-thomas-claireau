import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import GLOBAL_QUERY_APP from '../apollo/queries/_app';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/swiper.scss';
import { AnimatePresence } from 'framer-motion';

import { theme, GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import Box from 'components/Box';
import ContextWrapper from 'components/ContextWrapper';
import Query from 'components/Query';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	const colorScheme = {
		'/': {
			left: 'dark',
			right: 'light',
		},
		'/a-propos': {
			left: 'light',
			right: 'dark',
		},
		'/404': {
			left: 'dark',
			right: 'light',
		},
	};

	const RootStyled = styled.div`
		width: 100%;
		height: 100%;
	`;

	return (
		<Query query={GLOBAL_QUERY_APP} id={null}>
			{({ data }) => {
				return (
					<>
						<DefaultSeo {...data.global.meta_data} />
						<AnimatePresence exitBeforeEnter>
							<ThemeProvider theme={theme}>
								<GlobalStyles />
								<ContextWrapper
									colorScheme={colorScheme[router.pathname]}
									global={data.global}
								>
									<RootStyled id="app">
										<Box>
											<Component {...pageProps} key={router.route} />
										</Box>
									</RootStyled>
								</ContextWrapper>
							</ThemeProvider>
						</AnimatePresence>
					</>
				);
			}}
		</Query>
	);
}

export default MyApp;
