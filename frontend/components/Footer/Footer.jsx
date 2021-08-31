import Image from 'next/image';

import Container from '../Container/Container';

import style from './Footer.module.scss';

export default function Footer() {
	const now = new Date();

	return (
		<footer className={style['footer']}>
			<Container className={style['container']}>
				<div className={style['top']}>
					<div className={style['left']}>
						<Image
							className={style['memoji']}
							src="/assets/img/memoji.png"
							alt="memoji-thomas-claireau"
							width={54}
							height={70}
						/>
						<h2>Restons en contact !</h2>
					</div>
					<ul className={style['right']}>
						<li>
							<a
								href="https://www.linkedin.com/in/thomas-claireau/"
								target="_blank"
							>
								<i className="fab fa-linkedin-in"></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/thomasclaireau/"
								target="_blank"
							>
								<i className="fab fa-instagram"></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/thomasclaireau.dev"
								target="_blank"
							>
								<i className="fab fa-facebook"></i>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/thomas-claireau"
								target="_blank"
							>
								<i className="fab fa-github"></i>
							</a>
						</li>
						<li className="contact">
							<a href="#contact" target="_blank">
								<i className="far fa-envelope-open"></i>
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
