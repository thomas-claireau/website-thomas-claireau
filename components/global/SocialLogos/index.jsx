import { SocialProfileJsonLd } from 'next-seo';
import styles, { desktop, mobile } from './index.module.scss';

export default function SocialLogos({ view, items }) {
	const className = view == 'desktop' ? desktop : mobile;
	const socialProfileLink = [];

	return (
		<div className={`${styles['social-logos']} ${className}`}>
			{items &&
				items.map((item) => {
					const { id, picto_slug_fontawesome, link } = item;
					socialProfileLink.push(link);

					if (id && picto_slug_fontawesome && link) {
						return (
							<a key={id} href={link} target="_blank" rel="noopener noreferrer">
								<i className={picto_slug_fontawesome} aria-hidden="true"></i>
							</a>
						);
					}
				})}
			<SocialProfileJsonLd
				type="Person"
				name="Thomas Claireau"
				url={process.env.FRONT_URL}
				sameAs={socialProfileLink}
			/>
		</div>
	);
}
