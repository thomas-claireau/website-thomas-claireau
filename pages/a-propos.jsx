import React from 'react';
import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import A_PROPOS_QUERY from 'apollo/queries/a-propos';
import { motion } from 'framer-motion';

import styles, { left, right, texte } from 'styles/pages/a-propos.module.scss';

import HtmlContent from 'components/Global/HtmlContent';
import Col from 'components/Global/Layout/Col';
import LogosContainer from 'components/About/LogosContainer/index';
import MenuBottom from 'components/Global/Menus/MenuBottom';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

function About() {
	const transition = {
		hidden: { opacity: 0, y: '100%' },
		visible: { opacity: 1, y: 0 },
	};

	const { data, loading, error } = useQuery(A_PROPOS_QUERY);

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

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
			<NextSeo {...SEO} />
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

export default withApollo({ ssr: true })(About);
