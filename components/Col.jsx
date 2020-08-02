import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useRouter } from 'next/router';

import Menu from './Menu';

export default function Col({ bg, direction, children }) {
	const router = useRouter();
	const isHome = router.pathname == '/';
	const space = '60px';
	let padding;

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

	const ColStyled = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: ${!isHome ? 'center' : direction == 'left' ? 'flex-end' : 'flex-start'};
		align-items: center;
		position: relative;
		padding-top: ${space};
		padding-bottom: ${space};
		${padding}

		@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
			padding: calc(${space} - 40px);
			align-items: ${!isHome ? 'center' : direction == 'left' ? 'flex-end' : 'flex-start'};
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
		<ColStyled className={`${direction} ${bg}`}>
			{children}
			{direction == 'left' && <Menu space={space} className="desktop" />}
		</ColStyled>
	);
}
