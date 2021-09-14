import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../Container/Container';
import FantomImage from '../FantomImage/FantomImage';
import { useThemeContext } from '../ThemeProvider';
import style from './Footer.module.scss';

export default function Footer() {
	const { footer } = useThemeContext();
	const now = new Date();

	return (
		<footer className={style['footer']}>
			<Container className={style['container']}>
				<div className={style['top']}>
					<div className={style['left']}>
						<FantomImage
							className={style['memoji']}
							src={footer.logo.url}
							alt={footer.logo.alt}
							width={54}
							height={70}
						/>
						<h2>{footer.cta}</h2>
					</div>
					<ul className={style['right']}>
						{footer.menus.items.map((item, index) => {
							return (
								<li key={index}>
									<a
										href={item.url}
										target={item.target}
										title={item.title}
									>
										<FontAwesomeIcon icon={item.class.split(' ')} />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<p>
					{footer.copyright.left}
					{now.getFullYear()}
					{footer.copyright.right}
				</p>
			</Container>
		</footer>
	);
}
