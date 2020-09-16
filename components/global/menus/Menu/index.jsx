import React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BreadcrumbJsonLd } from 'next-seo';

import { menu, project, desktop, mobile, light, dark, active } from './index.module.scss';

import BoxContext from 'contexts/BoxContext';

function Menu({ view, hide, isProject }) {
	const { theme, global } = useContext(BoxContext);
	const className = view == 'desktop' ? desktop : mobile;

	const router = useRouter();
	const breadcrumbsItems = [];

	return (
		<div
			className={`menu ${menu} ${isProject ? project : ''} ${className} ${hide ? '--hide' : ''
				}`}
		>
			<ul>
				{global.item_menu_desktop &&
					global.item_menu_desktop.map((item, index) => {
						const { id, label, link } = item;

						if (view == 'mobile' && router.pathname == link) return null;

						breadcrumbsItems.push({
							position: index + 1,
							name: label,
							item: process.env.FRONT_URL + link,
						});

						return (
							<React.Fragment key={id}>
								<li>
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
							</React.Fragment>
						);
					})}
			</ul>
			<BreadcrumbJsonLd itemListElements={breadcrumbsItems} />
		</div>
	);
}

export default Menu;
