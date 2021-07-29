import { index, introduction, memoji, description } from './index.module.scss';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';

export default function Home() {
	return (
		<Layout>
			<main className={index}>
				<Container className={introduction}>
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
			</main>
		</Layout>
	);
}
