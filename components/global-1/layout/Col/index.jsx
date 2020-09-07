import { useRouter } from 'next/router';
import { useContext } from 'react';

import { col, dark, light, home } from './index.module.scss';

import Menu from 'components/global/menus/Menu/index';
import BoxContext from 'contexts/BoxContext';

export default function Col({ direction, align, justify, children, width, scroll, className }) {
	let padding;
	let variants = {};
	let { theme } = useContext(BoxContext);

	const router = useRouter();
	const isHome = router.pathname == '/' || router.pathname == '/404';
	const isProject = router.pathname == '/projets/[slug]';
	const space = '60px';

	theme = theme[direction] == 'dark' ? dark : light;

	if (isHome) {
		variants = {
			hidden: { x: direction == 'left' ? '-50%' : '50%' },
			visible: { x: 0 },
		};
	} else {
		padding = {
			paddingRight: `${space}`,
			paddingLeft: `${space}`,
		};
	}

	const css = {
		...padding,
		width: `${width ? width : '100%'}`,
		justifyContent: `${justify ? justify : 'center'}`,
		alignItems: `${align}`,
		paddingTop: `${space}`,
		paddingBottom: `${space}`,
		overflowX: `${scroll ? 'hidden' : 'initial'}`,
		overflowY: `${scroll ? 'scroll' : 'initial'}`,
	};

	return (
		<div
			className={`${col} ${direction} ${className} ${theme} ${isHome ? home : ''}`}
			variants={variants}
			initial="hidden"
			animate="visible"
			style={css}
		>
			{children}
			{direction == 'left' && <Menu view="desktop" isProject={isProject} />}
		</div>
	);
}
