import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import CustomErrorPage from 'pages/404';
import { request } from 'graphql-request';
import POST_QUERY from 'apollo/queries/post';

import styles, { post } from 'styles/pages/post.module.scss';

function Projet({ data }) {
	if (!data) return <CustomErrorPage />;
	data.year = new Date(data.year);

	const SEO = {
		title: data.header.meta_title,
		description: data.header.meta_description,
		openGraph: {
			title: data.header.meta_title,
			description: data.header.meta_description,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<section className={`${post} post main-content`}></section>
		</>
	);
}

export async function getServerSideProps({ params }) {
	const variables = { slug: params.slug };

	return request(process.env.API_URL + '/graphql', POST_QUERY, variables).then((data) => {
		const projet = data.projets[0];

		return {
			props: {
				data: projet || null,
			},
		};
	});
}

export default Projet;
