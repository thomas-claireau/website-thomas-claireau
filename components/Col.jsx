import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useRouter } from 'next/router';

import Menu from './Menu';

export default function Col({ direction, bg, children }) {
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
	`;

	return (
		<ColStyled className={`${direction} --bg-${bg}`}>
			{children}
			{direction == 'left' && <Menu space={space} />}
		</ColStyled>
	);
}
