import { Global, css } from '@emotion/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { header, top, title, right } from './index.module.scss';

import BoxContext from 'contexts/BoxContext';
import SocialLogos from 'components/global/SocialLogos/index';

export default function Header() {
	const router = useRouter();
	const { global } = useContext(BoxContext);
	const { title_box, social_logo, contact_email, contact_label } = global;

	return (
		<header className={header}>
			<Global
				styles={css`
					#app {
						&.--menu-open {
							header {
								z-index: 1;

								.top {
									position: initial;
									opacity: 1;
									z-index: 1;
								}
							}
						}
					}
				`}
			/>
			<div className={`${top} top`}>
				<div className="left">
					<Link href="/">
						<a
							className={`${title} --uppercase ${
								router.pathname === '/' ? 'active' : ''
							}`}
						>
							<span>{title_box}</span>
						</a>
					</Link>
				</div>
				<div className={`${right}`}>
					<a href={`mailto:${contact_email}`} className={`${title} contact --uppercase`}>
						<span>{contact_label}</span>
						<i className="fa fa-envelope-o" aria-hidden="true"></i>
					</a>
				</div>
			</div>
			<SocialLogos view="desktop" items={social_logo} />
		</header>
	);
}
