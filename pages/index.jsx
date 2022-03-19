/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialProfileJsonLd } from 'next-seo';
import { ReactSVG } from 'react-svg';
import slugify from 'slugify';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Detail from '../components/Detail/Detail';
import styleDetail from '../components/Detail/Detail.module.scss';
import FantomImage from '../components/FantomImage/FantomImage';
import Layout from '../components/Layout/Layout';
import Projects from '../components/Projects/Projects';
import Service from '../components/Service/Service';
import styleService from '../components/Service/Service.module.scss';
import style from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <SocialProfileJsonLd
        type="Person"
        name="Thomas Claireau"
        url={process.env.VERCEL_URL}
      />
      <main className={style.index}>
        <Container tag="section" className={style.introduction}>
          <div className={style.memoji}>
            <video
              title="Thomas Claireau"
              src="/assets/img/memoji-once.mp4"
              preload="auto"
              autoPlay
              muted
              playsInline
            />
          </div>
          <h1>
            💡 Développeur Web Fullstack / Intégrateur
            {' '}
            <br />
            Mentor chez Openclassrooms

          </h1>
          <div className={style.description}>
            <p>Je m’appelle Thomas Claireau, j’ai 26 ans et je suis développeur web avec 4 ans d’expérience en JavaScript et en PHP.</p>
          </div>
        </Container>
        <section className={style.services}>
          <Container className={style.container}>
            <div className={style.left}>
              <FantomImage
                src="/assets/img/service.webp"
                alt="service"
                width={360}
                height={240}
                layout="responsive"
                priority
              />
              <div className={style.texte}>
                <h2>Création de sites web ou d’applications en PHP, sous le framework Symfony</h2>
                <p>Je saurais vous accompagner au mieux aussi bien en amont du projet (aide au cahier des charges, conseils) qu’après sa réalisation (optimisation, maintenance).</p>
                <p>Je suis également à votre disposition si vous souhaitez un avis extérieur sur votre projet web.</p>
              </div>
            </div>
            <div className={style.right}>
              <Service>
                <ReactSVG
                  className={styleService.icon}
                  src="/assets/img/service-backend.svg"
                />
                <h3>Développement backend (Symfony)</h3>
                <div>
                  <p>Je met en place l’architecture back-end de votre application tout en respectant les standards de sécurité.</p>
                </div>
              </Service>
              <Service>
                <ReactSVG
                  className={styleService.icon}
                  src="/assets/img/service-cms.svg"
                />
                <h3>Création de thème sur un CMS</h3>
                <div>
                  <p>
                    Je conçois, pour vous, votre thème ou votre plugin
                    {' '}
                    <strong>administrable</strong>
                    {' '}
                    sur WordPress ou Prestashop. Je crée tout type de site : vitrine, e-commerce, intranet…
                  </p>
                </div>
              </Service>
              <Service>
                <ReactSVG
                  className={styleService.icon}
                  src="/assets/img/service-integration.svg"
                />
                <h3>Intégration web responsive d'une maquette</h3>
                <div>
                  <p>
                    J'intègre fidèlement la maquette du designer. Le site est responsive et adapté à tout type d'écran.
                  </p>
                </div>
              </Service>
              <Service>
                <ReactSVG
                  className={styleService.icon}
                  src="/assets/img/service-optimisation.svg"
                />
                <h3>Optimisation, référencement naturel (SEO) et maintenance</h3>
                <div>
                  <p>
                    Je réalise les optimisations et le référencement naturel de votre site web. Je suis à votre disposition pour toutes vos questions.
                  </p>
                </div>
              </Service>
            </div>
          </Container>
        </section>
        <section className={style.details}>
          <Container>
            <Detail>
              <div className={styleDetail.content}>
                <div className={styleDetail.icon}>
                  <ReactSVG
                    src="/assets/img/service-backend.svg"
                  />
                </div>
                <h2>Développement backend</h2>
                <div>
                  <ul>
                    <li>
                      Mise en place de l’architecture backend en
                      <strong>Symfony</strong>
                    </li>
                    <li>Respect des standards de sécurité</li>
                    <li>Tout type d’applications : SaaS, logiciel interne, intranet, extranet, site web</li>
                    <li>Développement d’API REST</li>
                    <li>Respect des standards OWASP</li>
                    <li>Conseils ou audits sur votre architecture existante</li>
                  </ul>
                </div>
              </div>
              <div className={styleDetail.medias}>
                <ReactSVG
                  className={`${styleDetail.logo} ${styleDetail.symfony}`}
                  src="/assets/img/symfony.svg"
                />
                <ReactSVG
                  className={`${styleDetail.logo} ${styleDetail.php}`}
                  src="/assets/img/php.svg"
                />
                <Button
                  icon={<FontAwesomeIcon icon={['fab', 'github']} />}
                  text="Voir sur GitHub"
                  url="https://github.com/thomas-claireau"
                  type="github"
                  blank="_blank"
                />
              </div>
            </Detail>
            <Detail type={styleDetail.cms}>
              <div className={styleDetail.medias}>
                <div className={styleDetail.left}>
                  <Languages
                    languages={['Wordpress', 'Prestashop', 'React']}
                  />
                </div>
                <div className={styleDetail.right}>
                  <Languages
                    languages={['Javascript', 'Next', 'Sass']}
                  />
                </div>
              </div>
              <div className={styleDetail.content}>
                <div className={styleDetail.icon}>
                  <ReactSVG
                    src="/assets/img/service-cms.svg"
                  />
                </div>
                <h2>Création de thème sur CMS</h2>
                <div>
                  <ul>
                    <li>
                      Création du thème de zéro
                      {' '}
                      <strong>sans page builder </strong>
                      : projet entièrement à votre image.
                    </li>
                    <li>Intégration web en suivant la maquette d’un designer</li>
                    <li>Maitrise de plusieurs technologies : SASS, Twig, Javascript natif, React.js, Next.js</li>
                    <li>Maitrise de différents CMS : WordPress, Prestashop. Je peux aussi être vite opérationnel sur Joomla, Drupal, Magento…</li>
                    <li>Sites administrables : utilisation d’ACF sur WordPress et une solution personnalisée sur les autres CMS.</li>
                    <li>Traitements et optimisation des images</li>
                    <li>Amélioration et optimisation du référencement naturel (SEO)</li>
                  </ul>
                </div>
              </div>
            </Detail>
            <Detail type={styleDetail.integration}>
              <div className={styleDetail.content}>
                <div className={styleDetail.icon}>
                  <ReactSVG
                    src="/assets/img/service-integration.svg"
                  />
                </div>
                <h2>Intégration web responsive d'une maquette</h2>
                <div>
                  <ul>
                    <li>Intégration fidèle à la maquette du designer</li>
                    <li>Intégration responsive. Je suis également force de proposition si cette partie de la maquette est manquante.</li>
                    <li>Respect des principes de clean code</li>
                    <li>Utilisation de React pour les projets plus complexes</li>
                    <li>Respect du W3C : permet d’assurer une compréhension optimale de la page par les navigateurs</li>
                    <li>Optimisation SEO pour améliorer votre présence sur le web</li>
                    <li>Utilisation des micro-données (JSON+LD) pour montrer le plus d’informations sur votre entreprise.</li>
                  </ul>
                </div>
              </div>
              <a
                href="https://feelinggoodbakery.fr/"
                target="_blank"
                className={styleDetail.medias}
                rel="noreferrer"
              >
                <video
                  src="/assets/img/integration.mp4"
                  preload="auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </a>
            </Detail>
          </Container>
        </section>
        <section className={style['projects-container']}>
          <FontAwesomeIcon
            className={style['fa-github']}
            icon={['fab', 'github']}
          />
          <Container className={style.container}>
            <h2>Mes principaux projets...</h2>
            <div><p>Voici quelques une de mes dernières réalisations</p></div>
            <Projects fields={[
              {
                title: 'Feeling Good Bakery',
                introduction: 'Site vitrine pour une biscuiterie Nantaise',
                url: 'https://feelinggoodbakery.fr/',
                image: '/assets/img/integration.png',
                date: '2021',
              },
              {
                title: 'StockReport',
                introduction: 'Application de gestion de portefeuille boursier',
                url: 'https://github.com/thomas-claireau/stockreport',
                image: '/assets/img/stockreport.png',
                date: '2022',
              },
              {
                title: 'HomeJungle',
                introduction: 'E-commerce front-end sur React',
                url: 'https://homejungle.vercel.app/',
                image: '/assets/img/homejungle.png',
                date: '2021',
              },
            ]}
            />
            <Button
              className={style.cta}
              icon={<FontAwesomeIcon icon={['fas', 'tv']} />}
              text="Voir plus de projets"
              url="https://github.com/thomas-claireau?tab=repositories&q=topic%3Acompleted-project&type=&language=&sort="
              type="cta"
              blank="_blank"
            />
          </Container>
        </section>
      </main>
    </Layout>
  );
}

function Languages({ languages }) {
  return languages.map((language, index) => {
    const className = slugify(
      language.toLowerCase().replace('.', '-'),
    );

    return (
      <div
        key={index}
        className={`${styleDetail.techno} ${styleDetail[className]}`}
      >
        <div className={styleDetail.icon}>
          <ReactSVG src={`/assets/img/${className}.svg`} />
        </div>
        {language}
      </div>
    );
  });
}
