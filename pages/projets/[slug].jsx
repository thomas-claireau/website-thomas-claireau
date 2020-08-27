import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import CustomErrorPage from 'pages/404';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from 'libs/apollo';
import PROJET_QUERY from 'apollo/queries/projet';

import Col from 'components/Global/Layout/Col';
import MenuBottom from 'components/Global/Menus/MenuBottom';
import SidebarInfo from 'components/Projet/SidebarInfo';
import LaptopSvg from 'components/Projet/LaptopSvg';
import { Loading } from 'components/Global/Loading';
import { Error } from 'components/Global/Error';

import ArrowRightSvg from 'public/assets/img/arrow_right.svg';

function Projet() {
	const ProjetStyled = styled.div`
		nav.desktop {
			position: fixed;
			bottom: 80px;
			left: 80px;
		}

		a.back {
			display: flex;
			justify-content: center;
			align-items: center;
			text-transform: uppercase;
			font-weight: bold;
			color: ${(props) => props.theme.colors.dark};

			&.bottom {
				margin-top: 80px;
			}

			svg {
				margin-right: 10px;

				path {
					fill: ${(props) => props.theme.colors.dark};
				}
			}
		}
	`;

	const router = useRouter();
	const slug = router.query.slug;

	const { data, loading, error } = useQuery(PROJET_QUERY, {
		variables: { slug },
	});

	if (loading) return <Loading />;

	if (error) return <Error error={error} />;

	const res = data.projets;

	if (Array.isArray(res) && !res.length) return <CustomErrorPage />;

	const projet = res[0];

	const SEO = {
		title: projet.header.meta_title,
		description: projet.header.meta_description,
		openGraph: {
			title: projet.header.meta_title,
			description: projet.header.meta_description,
		},
	};

	projet.year = new Date(projet.year);

	return (
		<>
			<NextSeo {...SEO} />
			<ProjetStyled className="main-content">
				<Col direction="left" align="flex-start" justify="flex-start" scroll>
					<Link href="/projets">
						<a className="back top">
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
					<LaptopSvg bg={projet.main_image.url} label={projet.header.title} />
					<Link href="/projets">
						<a className="back bottom">
							<ArrowRightSvg />
							Go back
						</a>
					</Link>
				</Col>
				<Col direction="right" align="flex-start" justify="flex-start" width="30%">
					<h1>{projet.header.title}</h1>
					<p className="description">{projet.short_description}</p>
					<ul>
						<SidebarInfo label="Année" value={projet.year.getFullYear()} />
						<SidebarInfo label="Catégories" value={projet.categories} multiple />
						<SidebarInfo label="Technologies" value={projet.technologies} multiple />
						<SidebarInfo label="Github" value={projet.github} link />
						<SidebarInfo label="Lien externe" value={projet.link} link />
					</ul>
				</Col>

				<MenuBottom></MenuBottom>
			</ProjetStyled>
		</>
	);
}

export default withApollo({ ssr: true })(Projet);
