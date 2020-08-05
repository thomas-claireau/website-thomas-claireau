import { useRouter } from 'next/router';
import { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { motion } from 'framer-motion';

import Menu from './Menu';
import BoxContext from '../contexts/BoxContext';

export default function Col({ direction, align, children }) {
	const router = useRouter();
	const isHome = router.pathname == '/' || router.pathname == '/404';
	const space = '60px';
	let padding;

	let { theme } = useContext(BoxContext);
	theme = theme[direction];

	if (isHome) {
		padding = css`
			${`padding-${direction}`}: space;
		`;
	} else {
		padding = css`
			padding-right: ${space};
			padding-left: ${space};
		`;
	}

	const ColStyled = styled(motion.div)`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: ${!isHome ? 'center' : direction == 'left' ? 'flex-end' : 'flex-start'};
		align-items: ${align};
		position: relative;
		padding-top: ${space};
		padding-bottom: ${space};
		${padding}
		${!isHome ? 'flex-direction: column;' : ''}
		background-color: ${(props) => props.theme.colors[theme]};

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			padding: calc(${space} - 40px);
			align-items: ${!isHome ? align : direction == 'left' ? 'flex-end' : 'flex-start'};
			justify-content: center;
		}

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-tablet']}) {
			padding: calc(${space} - 50px);
		}

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-small']}) {
			padding: calc(${space} - 55px);
		}
	`;

	return (
		<ColStyled
			initial={{ x: direction == 'left' ? -2000 : 2000 }}
			animate={{ x: 0 }}
			transition={{ ease: 'easeOut', duration: 0.4 }}
			className={`${direction}`}
		>
			{children}
			{direction == 'left' && <Menu space={space} className="desktop" />}
		</ColStyled>
	);
}
