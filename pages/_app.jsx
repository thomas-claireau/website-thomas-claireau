import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import GLOBAL_QUERY_APP from 'apollo/queries/_app';
import { AnimatePresence } from 'framer-motion';

import 'styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import Box from 'components/global/layout/Box/index';
import ContextWrapper from 'components/global/ContextWrapper';
import { Loading } from 'components/global/Loading/index';
import { Error } from 'components/global/Error/index';

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

	const { data, loading, error } = useQuery(GLOBAL_QUERY_APP);

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

	return (
		<>
			<DefaultSeo {...data.global.meta_data} />
			<AnimatePresence exitBeforeEnter>
				<ContextWrapper colorScheme={colorScheme[router.pathname]} global={data.global}>
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

export default withApollo()(MyApp);
