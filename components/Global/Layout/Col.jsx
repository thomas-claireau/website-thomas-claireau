import { useRouter } from 'next/router';
import { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { motion } from 'framer-motion';

import Menu from 'components/Global/Menus/Menu';
import BoxContext from 'contexts/BoxContext';

export default function Col({ direction, align, justify, children, width, scroll }) {
	const router = useRouter();
	const isHome = router.pathname == '/' || router.pathname == '/404';
	const space = '60px';
	let padding;
	let variants = {};

	let { theme } = useContext(BoxContext);
	theme = theme[direction];

	if (isHome) {
		padding = css`
			${`padding-${direction}`}: space;
		`;

		variants = {
			hidden: { x: direction == 'left' ? '-50%' : '50%' },
			visible: { x: 0 },
		};
	} else {
		padding = css`
			padding-right: ${space};
			padding-left: ${space};
		`;
	}

	const ColStyled = styled(motion.div)`
		width: ${width ? width : '100%'};
		height: 100%;
		display: flex !important;
		justify-content: ${justify ? justify : 'center'};
		align-items: ${align};
		flex-direction: ${isHome ? 'column' : 'row'};
		position: relative;
		padding-top: ${space};
		padding-bottom: ${space};
		${padding}
		${!isHome ? 'flex-direction: column;' : ''}
		background-color: ${(props) =>
			props.theme.colors[theme]};
		color: ${(props) => props.theme.colors[theme == 'dark' ? 'light' : 'dark']};
		overflow-x: ${scroll ? 'hidden' : 'initial'};
		overflow-y: ${scroll ? 'scroll' : 'initial'};

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			${isHome ? 'display: none !important;' : ''}
		}
	`;

	return (
		<ColStyled
			className={`${direction}`}
			variants={variants}
			initial="hidden"
			animate="visible"
		>
			{children}
			{direction == 'left' && <Menu space={space} className="desktop" />}
		</ColStyled>
	);
}
