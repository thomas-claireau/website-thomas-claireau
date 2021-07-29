import style from './index.module.scss';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';

import ServiceBackendSVG from 'public/assets/img/service-backend.svg';
import ServiceIntegrationSVG from 'public/assets/img/service-integration.svg';
import ServiceCmsSVG from 'public/assets/img/service-cms.svg';
import ServiceOptimisationSVG from 'public/assets/img/service-optimisation.svg';
import Button from '../components/Button/Button';
import SymfonySVG from 'public/assets/img/symfony.svg';
import PhpSVG from 'public/assets/img/php.svg';
import WordpressSVG from 'public/assets/img/wordpress.svg';
import Test from 'public/assets/img/reactjs.svg';
import NextJsSVG from 'public/assets/img/nextjs.svg';
import PrestashopSVG from 'public/assets/img/prestashop.svg';
import JavascriptSVG from 'public/assets/img/javascript.svg';
import SassSVG from 'public/assets/img/sass.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
	return (
		<Layout>
			<main className={style['index']}>
				<Container tag="section" className={style['introduction']}>
					<div className={style['memoji']}>
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
					<div className={style['description']}>
						<p>Je m'appelle Thomas Claireau et voici mon portfolio.</p>
						<p>
							Je suis développeur PHP Symfony, intégrateur web et
							spécialisé Wordpress. Je suis également mentor chez
							Openclassrooms.
						</p>
					</div>
				</Container>
				<section className={style['services']}>
					<Container className={style['container']}>
						<div className={style['left']}>
							<img src="assets/img/service.jpeg" alt="services" />
							<div className={style['texte']}>
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
						<div className={style['right']}>
							<div className={style['service']}>
								<div className={style['icon']}>
									<ServiceBackendSVG />
								</div>
								<h3>Développement backend (Symfony)</h3>
								<p>
									Je met en place l'architecture back-end de votre
									application tout en respectant les standards de
									sécurité.
								</p>
							</div>
							<div className={style['service']}>
								<div className={style['icon']}>
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
							<div className={style['service']}>
								<div className={style['icon']}>
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
							<div className={style['service']}>
								<div className={style['icon']}>
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
				<section className={style['details']}>
					<Container>
						<div className="detail backend">
							<div className="content">
								<div className="icon">
									<ServiceBackendSVG />
								</div>
								<h2>Développement backend</h2>
								<ul>
									<li>
										Mise en place de l'architecture backend en
										<strong>Symfony</strong>
									</li>
									<li>Respect des standards de sécurité</li>
									<li>
										Tout type d'applications : SaaS, logiciel interne,
										intranet, extranet, site web
									</li>
									<li>Développement d'API REST</li>
									<li>Respect des standards OWASP</li>
									<li>
										Conseils ou audits sur votre architecture
										existante
									</li>
								</ul>
							</div>
							<div className="medias">
								<SymfonySVG />
								<PhpSVG />
								<Button
									icon={<FontAwesomeIcon icon={faGithub} />}
									text="Voir sur GitHub"
									url="https://github.com/thomas-claireau"
									type="github"
									blank
								/>
							</div>
						</div>
						<div className="detail cms">
							<div className="medias">
								<div className="left">
									<div className="techno wordpress">
										<div className="icon">
											<WordpressSVG />
										</div>
										Wordpress
									</div>
									<div className="techno react">
										<div className="icon">
											<Test />
										</div>
										React.js
									</div>
									<div className="techno next">
										<div className="icon">
											<NextJsSVG />
										</div>
										Next.js
									</div>
								</div>
								<div className="right">
									<div className="techno prestashop">
										<div className="icon">
											<PrestashopSVG />
										</div>
										Prestashop
									</div>
									<div className="techno javascript">
										<div className="icon">
											<JavascriptSVG />
										</div>
										Javascript
									</div>
									<div className="techno sass">
										<div className="icon">
											<SassSVG />
										</div>
										SASS
									</div>
								</div>
							</div>
							<div className="content">
								<div className="icon">
									<ServiceCmsSVG />
								</div>
								<h2>Création de thème sur CMS</h2>
								<ul>
									<li>
										Création du thème de zéro
										<strong>sans page builder</strong>: projet
										entièrement à votre image.
									</li>
									<li>
										Intégration web en suivant la maquette d'un
										designer
									</li>
									<li>
										Maitrise de plusieurs technologies : SASS, Twig,
										Javascript natif, React.js, Next.js
									</li>
									<li>
										Maitrise de différents CMS : Wordpress,
										Prestashop. Je peux aussi être vite opérationnel
										sur Joomla, Drupal, Magento...
									</li>
									<li>
										Sites administrables : utilisation d'ACF sur
										Wordpress et une solution personnalisée sur les
										autres CMS.
									</li>
									<li>Traitements et optimisation des images</li>
									<li>
										Amélioration et optimisation du référencement
										naturel (SEO)
									</li>
								</ul>
							</div>
						</div>
						<div className="detail integration">
							<div className="content">
								<div className="icon">
									<ServiceBackendSVG />
								</div>
								<h2>Intégration web responsive d'une maquette</h2>
								<ul>
									<li>Intégration fidèle à la maquette du designer</li>
									<li>
										Intégration responsive. Je suis également force de
										proposition si cette partie de la maquette est
										manquante.
									</li>
									<li>Respect des principes de clean code</li>
									<li>
										Utilisation de React pour les projets plus
										complexes
									</li>
									<li>
										Respect du W3C : permet d'assurer une
										compréhension optimale de la page par les
										navigateurs
									</li>
									<li>
										Optimisation SEO pour améliorer votre présence sur
										le web
									</li>
									<li>
										Utilisation des micro-données (JSON+LD) pour
										montrer le plus d'informations sur votre
										entreprise.
									</li>
								</ul>
							</div>
							<a
								href="https://feelinggoodbakery.fr"
								target="_blank"
								className="medias"
							>
								<video
									src="assets/img/integration.mp4"
									preload="auto"
									autoPlay
									muted
									loop
									playsInline
								></video>
							</a>
						</div>
					</Container>
				</section>
			</main>
		</Layout>
	);
}
