import styles, { desktop, mobile } from './index.module.scss';

export default function SocialLogos({ view, items }) {
	const className = view == 'desktop' ? desktop : mobile;

	return (
		<div className={`${styles['social-logos']} ${className}`}>
			{items &&
				items.map((item) => {
					const { id, picto_slug_fontawesome, link } = item;

					if (id && picto_slug_fontawesome && link) {
						return (
							<a key={id} href={link} target="_blank" rel="noopener noreferrer">
								<i className={picto_slug_fontawesome} aria-hidden="true"></i>
							</a>
						);
					}
				})}
		</div>
	);
}
