import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import FantomImage from '../FantomImage/FantomImage';
import style from './Projects.module.scss';

export default function Projects({ fields }) {
	return (
		<ul className={style['projects']}>
			{fields.length &&
				fields.map((field, index) => (
					<li key={index}>
						<a href={field.url} target="_blank">
							<h3>{field.title}</h3>
							<div>
								<FontAwesomeIcon icon={['far', 'eye']} />
								<FantomImage
									className={style['img-container']}
									src={field.image.url}
									alt={field.image.alt}
									layout="fill"
								/>
								{field.date && (
									<span className="year">{field.date}</span>
								)}
								<h4>{field.title}</h4>
								{field.introduction && <p>{field.introduction}</p>}
							</div>
						</a>
					</li>
				))}
		</ul>
	);
}

Projects.propTypes = {
	fields: PropTypes.array.isRequired,
};
