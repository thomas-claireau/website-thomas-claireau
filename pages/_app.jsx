import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import GLOBAL_QUERY_APP from '../apollo/queries/_app';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';

import { theme, GlobalStyles } from 'components/Global/GlobalStyles';
import Box from 'components/Global/Layout/Box';
import ContextWrapper from 'components/Global/ContextWrapper';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

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
		'/projets': {
			left: 'dark',
			right: 'light',
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

	const { data, loading, error } = useQuery(GLOBAL_QUERY_APP);

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

	return (
		<>
			<DefaultSeo {...data.global.meta_data} />
			<AnimatePresence exitBeforeEnter>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<ContextWrapper colorScheme={colorScheme[router.pathname]} global={data.global}>
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
}

export default withApollo({ ssr: true })(MyApp);
