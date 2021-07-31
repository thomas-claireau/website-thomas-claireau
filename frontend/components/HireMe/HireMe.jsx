import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import Container from '../Container/Container';

import { hireMe } from './HireMe.module.scss';

export default function HireMe() {
	return (
		<div class={hireMe}>
			<Container>
				<div>
					<h2>Démarrons un projet</h2>
					<p>
						Et si on travaillait ensemble ?
						<br />
						Rencontrons nous !
					</p>
					<Button
						icon={<FontAwesomeIcon icon={faEnvelopeOpen} />}
						text="Me contacter"
						url="#contact"
						type="cta"
					/>
				</div>
			</Container>
		</div>
	);
}
