import Image from 'next/image';

import { useThemeContext } from '../ThemeProvider';

import Container from '../Container/Container';

import style from './Footer.module.scss';

export default function Footer() {
	const { footer } = useThemeContext();
	const now = new Date();

	console.log(footer);

	return (
		<footer className={style['footer']}>
			<Container className={style['container']}>
				<div className={style['top']}>
					<div className={style['left']}>
						<Image
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
										<i className={item.class}></i>
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
