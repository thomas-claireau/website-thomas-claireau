import Link from 'next/link';
import MENTIONS_LEGALES_QUERY from 'graphql-queries/mentions-legales';
import { motion } from 'framer-motion';
import { request } from 'graphql-request';

import GlobalSeo from 'components/global/GlobalSeo';
import Col from 'components/global/layout/Col/index';
import HtmlContent from 'components/global/HtmlContent/index';
import Sidebar from 'components/global/Sidebar/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';

import ArrowRightSvg from 'public/assets/img/arrow_right.svg';

import styles, {
	left,
	right,
	content,
	back,
	bottom,
} from 'styles/pages/mentions-legales.module.scss';

function MentionsLegales({ data }) {
	const globalTransition = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const transitionItem = {
		hidden: { opacity: 0, y: '30%' },
		visible: { opacity: 1, y: 0 },
	};

	console.log(data.mentions_legales.description);

	return (
		<>
			<GlobalSeo data={data.mentions_legales} />
			<motion.section
				className={`${styles['mentions-legales']} main-content`}
				variants={globalTransition}
				initial="hidden"
				animate="visible"
			>
				<Col
					className={left}
					direction="left"
					align="flex-start"
					justify="flex-start"
					scroll
				>
					<Link href="/">
						<a className={`${back} ${content}`}>
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
					<motion.div variants={transitionItem}>
						<HtmlContent className={`${content}`}>
							{data.mentions_legales.description}
						</HtmlContent>
					</motion.div>
					<Link href="/projets">
						<a className={`${back} ${bottom} ${content}`}>
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
				</Col>
				<Col
					className={right}
					direction="right"
					align="flex-start"
					justify="flex-start"
					width="40%"
				>
					<motion.div variants={transitionItem}>
						<Sidebar data={data.mentions_legales} />
					</motion.div>
				</Col>
				<MenuBottom></MenuBottom>
			</motion.section>
		</>
	);
}

export async function getServerSideProps() {
	return request(process.env.API_URL + '/graphql', MENTIONS_LEGALES_QUERY).then((data) => {
		return {
			props: {
				data: data || null,
			},
		};
	});
}

export default MentionsLegales;
