import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style, { projects } from './Projects.module.scss';

export default function Projects({ fields }) {
	return (
		<ul className={projects}>
			{fields.length &&
				fields.map((field, index) => (
					<li key={index}>
						<a
							href="https://github.com/thomas-claireau/feeling-good-bakery"
							target="_blank"
						>
							<h3>{field.title}</h3>
							<div>
								<FontAwesomeIcon
									className={style['fa-eye']}
									icon={faEye}
								/>
								<img src={field.image.url} alt={field.image.alt} />
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
