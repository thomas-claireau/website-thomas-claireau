import Button from '../Button/Button';
import Container from '../Container/Container';

import style from './HireMe.module.scss';

export default function HireMe() {
	return (
		<div className={style['hire-me']}>
			<Container>
				<div>
					<h2>Démarrons un projet</h2>
					<p>
						Et si on travaillait ensemble ?
						<br />
						Rencontrons nous !
					</p>
					<Button
						icon={<i className="far fa-envelope-open"></i>}
						text="Me contacter"
						url="#contact"
						type="cta"
					/>
				</div>
			</Container>
		</div>
	);
}
