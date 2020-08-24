import Router, { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import GLOBAL_QUERY_APP from '../apollo/queries/global/_app';

import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';
import { ThemeProvider } from 'emotion-theming';
import 'font-awesome/css/font-awesome.min.css';
// import 'swiper/swiper.scss';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import styled from '@emotion/styled';
import Query from 'components/Query';
import { theme, GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import Box from 'components/Box';
import ContextWrapper from 'components/ContextWrapper';

function MyApp({ Component, pageProps, apollo }) {
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

	const stagger = {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const variants = {
		hidden: {
			paddingTop: 0,
			paddingBottom: 0,
			paddingLeft: 0,
			paddingRight: 0,
		},
		visible: {
			paddingTop: 45,
			paddingRight: 55,
			paddingBottom: 45,
			paddingLeft: 55,
		},
	};

	const RootStyled = styled(motion.div)`
		width: 100%;
		height: 100%;
	`;

	return (
		<ApolloProvider client={apollo}>
			<Query query={GLOBAL_QUERY_APP} id={null}>
				{({ data: { global } }) => {
					return (
						<>
							<DefaultSeo {...global.meta_data} />
							<AnimatePresence exitBeforeEnter>
								<ThemeProvider theme={theme}>
									<GlobalStyles />
									<ContextWrapper colorScheme={colorScheme[router.pathname]}>
										<RootStyled variants={stagger}>
											<motion.div
												initial="hidden"
												animate="visible"
												transition={{ duration: 0.2 }}
												variants={variants}
												id="app"
											>
												<Box>
													<Component {...pageProps} />
												</Box>
											</motion.div>
										</RootStyled>
									</ContextWrapper>
								</ThemeProvider>
							</AnimatePresence>
						</>
					);
				}}
			</Query>
		</ApolloProvider>
	);
}

export default withData(MyApp);
