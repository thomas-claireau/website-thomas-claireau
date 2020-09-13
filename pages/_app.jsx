import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import GLOBAL_QUERY_APP from 'apollo/queries/_app';
import { AnimatePresence } from 'framer-motion';
import { request } from 'graphql-request';

import 'styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import Box from 'components/global/layout/Box/index';
import ContextWrapper from 'components/global/ContextWrapper';
import Loading from 'components/global/Loading/index';

function MyApp({ Component, pageProps, props }) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	// loading
	useEffect(() => {
		const start = () => {
			console.log('start');
			setLoading(true);
		};

		const end = () => {
			console.log('end');
			setLoading(false);
		};

		Router.events.on('routeChangeStart', start);
		Router.events.on('routeChangeComplete', end);
		Router.events.on('routeChangeError', end);

		return () => {
			Router.events.off('routeChangeStart', start);
			Router.events.off('routeChangeComplete', end);
			Router.events.off('routeChangeError', end);
		};
	}, []);

	useEffect(() => {
		setLoading(false);
	}, []);

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
		'/projets/[slug]': {
			left: 'light',
			right: 'dark',
		},
		'/blog': {
			left: 'light',
			right: 'dark',
		},
		'/blog/[slug]': {
			left: 'dark',
			right: 'light',
		},
		'/404': {
			left: 'dark',
			right: 'light',
		},
	};

	return (
		<>
			{loading && <Loading />}
			<DefaultSeo {...props.data.global.meta_data} />
			<AnimatePresence exitBeforeEnter>
				<ContextWrapper
					colorScheme={colorScheme[router.pathname]}
					global={props.data.global}
				>
					<section id="app">
						<Box>
							<Component {...pageProps} key={router.route} />
						</Box>
					</section>
				</ContextWrapper>
			</AnimatePresence>
		</>
	);
}

MyApp.getInitialProps = async () => {
	return request(process.env.API_URL + '/graphql', GLOBAL_QUERY_APP).then((data) => {
		return {
			props: {
				data: data || null,
			},
		};
	});
};

export default MyApp;
