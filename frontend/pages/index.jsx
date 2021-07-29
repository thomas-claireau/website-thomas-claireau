import {
	index,
	introduction,
	memoji,
	description,
	services,
	left,
	texte,
	right,
	service,
	icon,
	container,
} from './index.module.scss';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';

import ServiceBackendSVG from 'public/assets/img/service-backend.svg';
import ServiceIntegrationSVG from 'public/assets/img/service-integration.svg';
import ServiceCmsSVG from 'public/assets/img/service-cms.svg';
import ServiceOptimisationSVG from 'public/assets/img/service-optimisation.svg';

export default function Home() {
	return (
		<Layout>
			<main className={index}>
				<Container tag="section" className={introduction}>
					<div className={memoji}>
						<video
							src="/assets/img/memoji-once.mp4"
							preload="auto"
							autoPlay
							muted
							playsInline
						></video>
					</div>
					<h1>
						Je suis développeur PHP Symfony
						<br />
						et mentor pour Openclassrooms
					</h1>
					<div className={description}>
						<p>Je m'appelle Thomas Claireau et voici mon portfolio.</p>
						<p>
							Je suis développeur PHP Symfony, intégrateur web et
							spécialisé Wordpress. Je suis également mentor chez
							Openclassrooms.
						</p>
					</div>
				</Container>
				<section className={services}>
					<Container className={container}>
						<div className={left}>
							<img src="assets/img/service.jpeg" alt="services" />
							<div className={texte}>
								<h2>
									Création de sites web ou d'applications en PHP, sous
									le framework Symfony
								</h2>
								<p>
									Je saurais vous accompagner au mieux aussi bien en
									amont du projet (aide au cahier des charges,
									conseils) qu’après sa réalisation (optimisation,
									maintenance).
								</p>
								<p>
									Je suis également à votre disposition si vous
									souhaitez un avis extérieur sur votre projet web.
								</p>
							</div>
						</div>
						<div className={right}>
							<div className={service}>
								<div className={icon}>
									<ServiceBackendSVG />
								</div>
								<h3>Développement backend (Symfony)</h3>
								<p>
									Je met en place l'architecture back-end de votre
									application tout en respectant les standards de
									sécurité.
								</p>
							</div>
							<div className={service}>
								<div className={icon}>
									<ServiceCmsSVG />
								</div>
								<h3>Création de thème sur un CMS</h3>
								<p>
									Je conçois, pour vous, votre thème ou votre plugin
									<strong>administrable</strong>
									sur Wordpress ou Prestashop. Je crée tout type de
									site : vitrine, e-commerce, intranet...
								</p>
							</div>
							<div className={service}>
								<div className={icon}>
									<ServiceIntegrationSVG />
								</div>
								<h3>Intégration web responsive d'une maquette</h3>
								<p>
									Je suis capable de travailler avec un designer web et
									d'intégrer sa maquette graphique. Je suis également
									force de proposition sur le responsive, si la
									maquette n'est pas complète.
								</p>
							</div>
							<div className={service}>
								<div className={icon}>
									<ServiceOptimisationSVG />
								</div>
								<h3>
									Optimisation, référencement naturel (SEO) et
									maintenance
								</h3>
								<p>
									Je développe en ayant connaissance de la
									<strong>performance</strong>
									du site, des principes d'
									<strong>accessibilités</strong>
									et de la notion de
									<strong>cleancode</strong>. J'ai d'ailleurs, en tant
									que mentor chez Openclassrooms, l'occasion
									d'accompagner des étudiants sur ces différentes
									thématiques.
								</p>
							</div>
						</div>
					</Container>
				</section>
			</main>
		</Layout>
	);
}
