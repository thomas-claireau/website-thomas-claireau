import styles from './index.module.scss';
import CookieSvg from 'public/assets/img/cookie.svg';

export default function CustomCookieBanner(props) {
	return (
		<div className={`react-cookie-banner ${styles['cookie-banner']}`}>
			<CookieSvg />
			<span className="cookie-message">
				En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies
				me permettant de réaliser des statistiques de visites.
				<a href="/mentions-legales" className="cookie-link">
					En savoir plus
				</a>
			</span>
			<button className="button-close" onClick={props.onAccept}>
				<i className="fa fa-times" aria-hidden="true"></i>
			</button>
		</div>
	);
}
