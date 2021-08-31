import Image from 'next/image';

import { projects } from './Projects.module.scss';

export default function Projects({ fields }) {
	return (
		<ul className={projects}>
			{fields.length &&
				fields.map((field, index) => (
					<li key={index}>
						<a href={field.url} target="_blank">
							<h3>{field.title}</h3>
							<div>
								<i className="far fa-eye"></i>
								<Image
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
