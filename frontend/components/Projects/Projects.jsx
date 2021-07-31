import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style, { projects } from './Projects.module.scss';

export default function Projects() {
	return (
		<ul className={projects}>
			<li>
				<a
					href="https://github.com/thomas-claireau/feeling-good-bakery"
					target="_blank"
				>
					<h3>Feeling Good Bakery</h3>
					<div>
						<FontAwesomeIcon className={style['fa-eye']} icon={faEye} />
						<img src="https://picsum.photos/1920/1080" alt="" />
						<span className="year">2021</span>
						<h4>Feeling Good Bakery</h4>
						<p>Intégration web - SASS - Javascript</p>
					</div>
				</a>
			</li>
			<li>
				<a href="https://github.com/thomas-claireau/bilemo" target="_blank">
					<h3>Bilemo</h3>
					<div>
						<FontAwesomeIcon className={style['fa-eye']} icon={faEye} />
						<img src="https://picsum.photos/1920/1080" alt="" />
						<span className="year">2020</span>
						<h4>Bilemo</h4>
						<p>
							Web service exposant une API REST
							<br />
							PHP - Symfony
						</p>
					</div>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/thomas-claireau/snowtricks"
					target="_blank"
				>
					<h3>SnowTricks</h3>
					<div>
						<FontAwesomeIcon className={style['fa-eye']} icon={faEye} />
						<img src="https://picsum.photos/1920/1080" alt="" />
						<span className="year">2020</span>
						<h4>SnowTricks</h4>
						<p>
							Développement du site communautaire
							<br />
							PHP Symfony
						</p>
					</div>
				</a>
			</li>
		</ul>
	);
}
