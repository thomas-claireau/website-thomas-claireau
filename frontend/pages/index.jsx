import style from './index.module.scss';
import styleDetail from '../components/Detail/Detail.module.scss';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import Service from '../components/Service/Service';
import Detail from '../components/Detail/Detail';
import Projects from '../components/Projects/Projects';
import HireMe from '../components/HireMe/HireMe';
import Posts from '../components/Posts/Posts';

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
import { faEdit, faTv } from '@fortawesome/free-solid-svg-icons';

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
							<Service>
								<div>
									<ServiceBackendSVG />
								</div>
								<h3>Développement backend (Symfony)</h3>
								<p>
									Je met en place l'architecture back-end de votre
									application tout en respectant les standards de
									sécurité.
								</p>
							</Service>
							<Service>
								<div>
									<ServiceCmsSVG />
								</div>
								<h3>Création de thème sur un CMS</h3>
								<p>
									Je conçois, pour vous, votre thème ou votre plugin
									<strong>administrable</strong>
									sur Wordpress ou Prestashop. Je crée tout type de
									site : vitrine, e-commerce, intranet...
								</p>
							</Service>
							<Service>
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
							</Service>
							<Service>
								<div>
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
							</Service>
						</div>
					</Container>
				</section>
				<section className={style['details']}>
					<Container>
						<Detail>
							<div className={styleDetail['content']}>
								<div className={styleDetail['icon']}>
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
							<div className={styleDetail['medias']}>
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
						</Detail>
						<Detail type={styleDetail['cms']}>
							<div className={styleDetail['medias']}>
								<div className={styleDetail['left']}>
									<div
										className={`${styleDetail['techno']} ${styleDetail['wordpress']}`}
									>
										<div className={styleDetail['icon']}>
											<WordpressSVG />
										</div>
										Wordpress
									</div>
									<div
										className={`${styleDetail['techno']} ${styleDetail['react']}`}
									>
										<div className={styleDetail['icon']}>
											<Test />
										</div>
										React.js
									</div>
									<div
										className={`${styleDetail['techno']} ${styleDetail['next']}`}
									>
										<div className={styleDetail['icon']}>
											<NextJsSVG />
										</div>
										Next.js
									</div>
								</div>
								<div className={styleDetail['right']}>
									<div
										className={`${styleDetail['techno']} ${styleDetail['prestashop']}`}
									>
										<div className={styleDetail['icon']}>
											<PrestashopSVG />
										</div>
										Prestashop
									</div>
									<div
										className={`${styleDetail['techno']} ${styleDetail['javascript']}`}
									>
										<div className={styleDetail['icon']}>
											<JavascriptSVG />
										</div>
										Javascript
									</div>
									<div
										className={`${styleDetail['techno']} ${styleDetail['sass']}`}
									>
										<div className={styleDetail['icon']}>
											<SassSVG />
										</div>
										SASS
									</div>
								</div>
							</div>
							<div className={styleDetail['content']}>
								<div className={styleDetail['icon']}>
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
						</Detail>
						<Detail type={styleDetail['integration']}>
							<div className={styleDetail['content']}>
								<div className={styleDetail['icon']}>
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
								className={styleDetail['medias']}
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
						</Detail>
					</Container>
				</section>
				<section className={style['projects-container']}>
					<FontAwesomeIcon
						className={style['fa-github']}
						icon={faGithub}
					/>
					<Container className={style['container']}>
						<h2>Mes principaux projets...</h2>
						<p>Voici quelques une de mes dernières réalisations</p>
						<Projects />
						<Button
							className={style['cta']}
							icon={<FontAwesomeIcon icon={faTv} />}
							text="Voir plus de projets"
							url={`https://github.com/thomas-claireau?tab=repositories&q=topic%3Acompleted-project&type=&language=&sort=`}
							type="cta"
							blank
						/>
					</Container>
				</section>
				<HireMe />
				<section className={style['posts-container']}>
					<Container className={style['container']}>
						<h2>Les derniers articles</h2>
						<Posts items={[[], []]} className={style['posts']} />
						<Button
							icon={<FontAwesomeIcon icon={faEdit} />}
							text="Voir plus d'articles"
							url="/blog"
							type="cta"
						/>
					</Container>
				</section>
			</main>
		</Layout>
	);
}
