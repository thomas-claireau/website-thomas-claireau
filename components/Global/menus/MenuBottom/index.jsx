import { Global, css } from '@emotion/core';
import Link from 'next/link';
import { useContext } from 'react';

import styles from './index.module.scss';

import BoxContext from 'contexts/BoxContext';

function MenuBottom() {
	const { global } = useContext(BoxContext);

	return (
		<div className={`${styles['menu-bottom']} menu-bottom`}>
			<Global
				styles={css`
					#app.--menu-open {
						.menu-bottom {
							display: none;
						}
					}
				`}
			/>
			{global.menu_bottom_mobile &&
				global.menu_bottom_mobile.map((item) => {
					const { id, label, link, slug_picto_fontawesome: picto, interne_link } = item;
					return interne_link ? (
						<Link key={id} href={link}>
							<a>
								<i className={picto} aria-hidden="true"></i>
								{label}
							</a>
						</Link>
					) : (
						<a key={id} href={link}>
							<i className={picto} aria-hidden="true"></i>
							{label}
						</a>
					);
				})}
		</div>
	);
}

export default MenuBottom;
