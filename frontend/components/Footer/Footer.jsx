import Image from 'next/image';

import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../Container/Container';
import {
	footer,
	container,
	top,
	left,
	memoji,
	right,
} from './Footer.module.scss';

export default function Footer() {
	const now = new Date();

	return (
		<footer className={footer}>
			<Container className={container}>
				<div className={top}>
					<div className={left}>
						<Image
							className={memoji}
							src="/assets/img/memoji.png"
							alt="memoji-thomas-claireau"
							width={54}
							height={70}
						/>
						<h2>Restons en contact !</h2>
					</div>
					<ul className={right}>
						<li>
							<a
								href="https://www.linkedin.com/in/thomas-claireau/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedinIn} />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/thomasclaireau/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/thomasclaireau.dev"
								target="_blank"
							>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/thomas-claireau"
								target="_blank"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>
						<li className="contact">
							<a href="#contact" target="_blank">
								<FontAwesomeIcon icon={faEnvelopeOpen} />
							</a>
						</li>
					</ul>
				</div>
				<p>
					Copyright © {now.getFullYear()} <span className="date"></span>-
					Thomas Claireau
				</p>
			</Container>
		</footer>
	);
}
