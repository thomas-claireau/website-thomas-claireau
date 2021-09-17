import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button/Button';
import MenuItem from '../MenuItem/MenuItem';
import style, { dark, light } from '../MenuItem/MenuItem.module.scss';
import { menu } from './Menu.module.scss';

export default function Menu({ items }) {
	const [toggle, setToggle] = useState(light);

	const router = useRouter();

	function handleClick() {
		setToggle(toggle == light ? dark : light);
	}

	return (
		<nav className={menu}>
			{items &&
				items.length &&
				items.map((item, index) => {
					return (
						<MenuItem className={style['icon']} key={index}>
							<a title={item.title} href={item.url} target={item.target}>
								<FontAwesomeIcon icon={item.class.split(' ')} />
							</a>
						</MenuItem>
					);
				})}
			<MenuItem className={style['contact']}>
				<Button
					icon={<FontAwesomeIcon icon={['far', 'envelope-open']} />}
					text="Contactez-moi"
					url="mailto:pro.thomas.claireau@gmail.com?subject=Demande de contact&body=Nom et prénom : %0D%0A%0D%0ABudget : %0D%0A%0D%0A Description du projet : %0D%0A"
					type="cta"
				/>
			</MenuItem>
			<MenuItem className={style['blog']}>
				{router.pathname !== '/blog' && (
					<Link href="/blog/">
						<a>Blog</a>
					</Link>
				)}
				<Link href="/rss/feed.xml">
					<a className={style['svg-container']} target="_blank">
						<FontAwesomeIcon icon={['fas', 'rss-square']} />
					</a>
				</Link>
			</MenuItem>
			{/* <MenuItem
				className={`${style['toggleTheme']} ${toggle}`}
				onClick={handleClick}
			>
				<div className={style['icons']}>
					<ReactSVG
						className={style['lightImg']}
						src="/assets/img/sun.svg"
						alt="sun"
					/>
					<ReactSVG
						className={style['darkImg']}
						src="/assets/img/moon.svg"
						alt="moon"
					/>
				</div>
				<span></span>
			</MenuItem> */}
		</nav>
	);
}

Menu.propTypes = {
	items: PropTypes.array,
};
