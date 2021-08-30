import axios from 'axios';
import { ReactSVG } from 'react-svg';
import slugify from 'slugify';
import Image from 'next/image';

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
import Button from '../components/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faTv } from '@fortawesome/free-solid-svg-icons';

export default function Home({ fields }) {
	const {
		header,
		introduction_services,
		services,
		projects,
		cta_contact,
		posts,
	} = fields;

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
							<Image
								src={introduction_services.introduction.image.url}
								alt={introduction_services.introduction.image.alt}
								width={360}
								height={240}
								layout="responsive"
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
									icon={<FontAwesomeIcon icon={faGithub} />}
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
									<Languages
										languages={services.bloc_2.languages}
										interval={[0, 2]}
									/>
								</div>
								<div className={styleDetail['right']}>
									<Languages
										languages={services.bloc_2.languages}
										interval={[3, 5]}
									/>
								</div>
							</div>
							<div className={styleDetail['content']}>
								<div className={styleDetail['icon']}>
									<ReactSVG
										src={services.bloc_2.icon.url}
										alt={services.bloc_2.icon.alt}
									/>
								</div>
								<h2>{services.bloc_2.title}</h2>
								<HtmlContent>{services.bloc_2.text}</HtmlContent>
							</div>
						</Detail>
						<Detail type={styleDetail['integration']}>
							<div className={styleDetail['content']}>
								<div className={styleDetail['icon']}>
									<ReactSVG
										src={services.bloc_3.icon.url}
										alt={services.bloc_3.icon.alt}
									/>
								</div>
								<h2>{services.bloc_3.title}</h2>
								<HtmlContent>{services.bloc_3.text}</HtmlContent>
							</div>
							<a
								href={services.bloc_3.media_cta.url}
								target={services.bloc_3.media_cta.target}
								className={styleDetail['medias']}
							>
								<video
									src={services.bloc_3.media.url}
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
						<h2>{projects.title}</h2>
						<HtmlContent>{projects.introduction}</HtmlContent>
						<Projects fields={projects.projects} />
						<Button
							className={style['cta']}
							icon={<FontAwesomeIcon icon={faTv} />}
							text={projects.cta.title}
							url={projects.cta.url}
							type="cta"
							blank={projects.cta.target == '_blank'}
						/>
					</Container>
				</section>
				<HireMe fields={cta_contact} />
				<section className={style['posts-container']}>
					<Container className={style['container']}>
						<h2>{posts.title}</h2>
						{posts.articles && (
							<Posts items={posts.articles} className={style['posts']} />
						)}
						<Button
							icon={<FontAwesomeIcon icon={faEdit} />}
							text={posts.cta.title}
							url={posts.cta.url}
							type="cta"
							blank={posts.cta.target == '_blank'}
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

	return { props: { fields: fields.data } };
}

function Languages({ languages, interval }) {
	return Object.values(languages).map((language, index) => {
		if (index >= interval[0] && index <= interval[1]) {
			const className = slugify(
				language.title.toLowerCase().replace('.', '-')
			);
			return (
				<div
					key={index}
					className={`${styleDetail['techno']} ${styleDetail[className]}`}
				>
					<div className={styleDetail['icon']}>
						<ReactSVG src={language.logo.url} alt={language.logo.alt} />
					</div>
					{language.title}
				</div>
			);
		}
	});
}
