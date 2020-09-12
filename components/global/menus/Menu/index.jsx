import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { menu, project, desktop, mobile, light, dark, active } from './index.module.scss';

import BoxContext from 'contexts/BoxContext';

function Menu({ view, hide, isProject }) {
	const { theme, global } = useContext(BoxContext);
	const className = view == 'desktop' ? desktop : mobile;

	const router = useRouter();

	return (
		<div
			className={`menu ${menu} ${isProject ? project : ''} ${className} ${
				hide ? '--hide' : ''
			}`}
		>
			<ul>
				{global.item_menu_desktop &&
					global.item_menu_desktop.map((item) => {
						const { id, label, link } = item;

						if (view == 'mobile' && router.pathname == link) return null;

						return (
							<li key={id}>
								<Link href={link}>
									<a
										className={`
											${router.pathname === link ? active : ''} 
											${theme.left == 'dark' ? light : dark}
										`}
									>
										{label}
									</a>
								</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default Menu;
