//lib
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/swiper.scss';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { theme, GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import Box from 'components/Box';
import ContextWrapper from 'components/ContextWrapper';
import Router, { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';

function MyApp({ Component, pageProps, globalInformations }) {
	const router = useRouter();

	const { meta_datas } = globalInformations;
	const { title, description, open_graph, twitter, canonical } = meta_datas;

	const SEO = {
		title,
		description,
		canonical,
		openGraph: {
			type: open_graph.type,
			locale: open_graph.locale,
			url: canonical,
			title: title,
			site_name: open_graph.site_name,
		},
		twitter: {
			handle: twitter.handle,
			cardType: twitter.card_type,
		},
	};

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
		<>
			<DefaultSeo {...SEO} />
			<AnimatePresence exitBeforeEnter>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<ContextWrapper
						colorScheme={colorScheme[router.pathname]}
						globalInformations={globalInformations}
					>
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
}

MyApp.getInitialProps = async () => {
	const { API_URL } = process.env;

	const res = await fetch(`${API_URL}/global-informations`);
	const data = await res.json();

	return {
		globalInformations: data ? data : null,
	};
};

export default MyApp;
