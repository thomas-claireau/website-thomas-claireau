import React from 'react';
import A_PROPOS_QUERY from 'graphql-queries/a-propos';
import { motion } from 'framer-motion';
import { request } from 'graphql-request';

import styles, { left, right, texte } from 'styles/pages/a-propos.module.scss';

import HtmlContent from 'components/global/HtmlContent/index';
import Col from 'components/global/layout/Col/index';
import LogosContainer from 'components/about/LogosContainer/index';
import MenuBottom from 'components/global/menus/MenuBottom/index';
import GlobalSeo from 'components/global/GlobalSeo';

function About({ data }) {
	const transition = {
		hidden: { opacity: 0, y: '100%' },
		visible: { opacity: 1, y: 0 },
	};

	const about = data.a_propos;

	const SEO = {
		title: about.header.meta_title,
		description: about.header.meta_description,
		openGraph: {
			title: about.header.meta_title,
			description: about.header.meta_description,
		},
	};

	return (
		<>
			<GlobalSeo data={about} />
			<section className={`${styles['a-propos']} main-content`}>
				<Col direction="left" align="center" className={left}>
					<LogosContainer languages={about.left_content.language} />
				</Col>
				<Col direction="right" align="flex-start" className={right}>
					<motion.h1
						className="--uppercase"
						variants={transition}
						initial="hidden"
						animate="visible"
					>
						<span className="--hide">Thomas Claireau</span>
						<span>{about.header.title}</span>
					</motion.h1>
					<motion.div variants={transition} initial="hidden" animate="visible">
						<HtmlContent
							className={texte}
							variants={transition}
							initial="hidden"
							animate="visible"
						>
							{about.right_content.description}
						</HtmlContent>
					</motion.div>
				</Col>
				<MenuBottom></MenuBottom>
			</section>
		</>
	);
}

export async function getServerSideProps() {
	return request(process.env.API_URL + '/graphql', A_PROPOS_QUERY).then((data) => {
		return {
			props: {
				data: data || null,
			},
		};
	});
}

export default About;
