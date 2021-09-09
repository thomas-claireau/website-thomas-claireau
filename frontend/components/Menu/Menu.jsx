import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

import MenuItem from '../MenuItem/MenuItem';
import Button from '../Button/Button';

import { menu } from './Menu.module.scss';
import style, { light, dark } from '../MenuItem/MenuItem.module.scss';

export default function Menu({ items }) {
	const [toggle, setToggle] = useState(light);

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
								<i className={item.class}></i>
							</a>
						</MenuItem>
					);
				})}
			<MenuItem className={style['contact']}>
				<Button
					icon={<i className="far fa-envelope-open" />}
					text="Contactez-moi"
					url="#contact"
					type="cta"
				/>
			</MenuItem>
			<MenuItem className={style['blog']}>
				<Link href="/blog/">
					<a>Blog</a>
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
