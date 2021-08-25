import axios from 'axios';
import { ReactSVG } from 'react-svg';

import style from './index.module.scss';
import styleDetail from '../components/Detail/Detail.module.scss';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import Service from '../components/Service/Service';
import Detail from '../components/Detail/Detail';
import Projects from '../components/Projects/Projects';
import HireMe from '../components/HireMe/HireMe';
import Posts from '../components/Posts/Posts';
import HtmlContent from '../components/HtmlContent/HtmlContent';

import ServiceBackendSVG from 'public/assets/img/service-backend.svg';
import ServiceCmsSVG from 'public/assets/img/service-cms.svg';
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

export default function Home({ fields }) {
	const { header, introduction_services, services, projects, cta_contact } =
		fields;

	console.log(fields);

	return (
		<Layout>
			<main className={style['index']}>
				<Container tag="section" className={style['introduction']}>
					<div className={style['memoji']}>
						<video
							title={header.avatar.alt}
							src={header.avatar.url}
							preload="auto"
							autoPlay
							muted
							playsInline
						></video>
					</div>
					<HtmlContent tag="h1">{header.titre}</HtmlContent>
					<HtmlContent className={style['description']}>
						{header.introduction}
					</HtmlContent>
				</Container>
				<section className={style['services']}>
					<Container className={style['container']}>
						<div className={style['left']}>
							<img
								src={introduction_services.introduction.image.url}
								alt={introduction_services.introduction.image.alt}
							/>
							<HtmlContent className={style['texte']}>
								{introduction_services.introduction.texte}
							</HtmlContent>
						</div>
						<div className={style['right']}>
							<Service>
								<div>
									<ReactSVG
										className="js-inject-me"
										src={introduction_services.bloc_1.icon.url}
										alt={introduction_services.bloc_1.icon.alt}
									/>
								</div>
								<h3>{introduction_services.bloc_1.title}</h3>
								<HtmlContent tag="p">
									{introduction_services.bloc_1.text}
								</HtmlContent>
							</Service>
							<Service>
								<div>
									<ReactSVG
										className="js-inject-me"
										src={introduction_services.bloc_2.icon.url}
										alt={introduction_services.bloc_2.icon.alt}
									/>
								</div>
								<h3>{introduction_services.bloc_2.title}</h3>
								<HtmlContent tag="p">
									{introduction_services.bloc_2.text}
								</HtmlContent>
							</Service>
							<Service>
								<div className={style['icon']}>
									<ReactSVG
										className="js-inject-me"
										src={introduction_services.bloc_3.icon.url}
										alt={introduction_services.bloc_3.icon.alt}
									/>
								</div>
								<h3>{introduction_services.bloc_3.title}</h3>
								<HtmlContent tag="p">
									{introduction_services.bloc_2.text}
								</HtmlContent>
							</Service>
							<Service>
								<div>
									<ReactSVG
										className="js-inject-me"
										src={introduction_services.bloc_4.icon.url}
										alt={introduction_services.bloc_4.icon.alt}
									/>
								</div>
								<h3>{introduction_services.bloc_4.title}</h3>
								<HtmlContent tag="p">
									{introduction_services.bloc_2.text}
								</HtmlContent>
							</Service>
						</div>
					</Container>
				</section>
				<section className={style['details']}>
					<Container>
						<Detail>
							<div className={styleDetail['content']}>
								<div className={styleDetail['icon']}>
									<ReactSVG
										src={services.bloc_1.icon.url}
										alt={services.bloc_1.icon.alt}
									/>
								</div>
								<h2>{services.bloc_1.title}</h2>
								<HtmlContent>{services.bloc_1.text}</HtmlContent>
							</div>
							<div className={styleDetail['medias']}>
								<ReactSVG
									className={`${styleDetail['logo']} ${styleDetail['symfony']}`}
									src={services.bloc_1.logos.logo_1.url}
									alt={services.bloc_1.logos.logo_1.alt}
								/>
								<ReactSVG
									className={`${styleDetail['logo']} ${styleDetail['php']}`}
									src={services.bloc_1.logos.logo_2.url}
									alt={services.bloc_1.logos.logo_2.alt}
								/>
								<Button
									icon={<FontAwesomeIcon icon={'coucou'} />}
									text={services.bloc_1.cta.title}
									url={services.bloc_1.cta.url}
									type="github"
									blank={services.bloc_1.cta.target === '_blank'}
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
						{fields.posts && (
							<Posts items={fields.posts} className={style['posts']} />
						)}
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

export async function getStaticProps() {
	const fields = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/pages?post_id=22`
	);

	const posts = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/posts/?limit=2`
	);

	return { props: { fields: { ...fields.data, posts: posts.data } } };
}
