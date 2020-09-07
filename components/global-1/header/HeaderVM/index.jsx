import Link from 'next/link';
import { useRouter } from 'next/router';
import { Global, css } from '@emotion/core';

import styles, { title } from './index.module.scss';

import BurgerMenu from 'components/global/menus/BurgerMenu/index';

export default function HeaderVM({ onClick }) {
	const router = useRouter();

	const handleClick = function () {
		onClick();
	};

	return (
		<div className={`${styles['header-vm']} header-vm`}>
			<Global
				styles={css`
					#app.--menu-open {
						.header-vm {
							display: none;
						}
					}
				`}
			/>
			<div className="left">
				<Link href="/">
					<a
						className={`${title} --uppercase ${
							router.pathname === '/' ? 'active' : ''
						}`}
					>
						Thomas / Claireau
					</a>
				</Link>
			</div>
			<div className="right">
				<BurgerMenu action="open" onClick={handleClick} />
			</div>
		</div>
	);
}
