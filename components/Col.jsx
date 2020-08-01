import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useRouter } from 'next/router';

export default function Col({ direction, bg, children }) {
	const router = useRouter();
	const isHome = router.pathname == '/';
	let padding;

	if (isHome) {
		padding = css`
			${`padding-${direction}`}: 60px;
		`;
	} else {
		padding = css`
			padding-right: 60px;
			padding-left: 60px;
		`;
	}

	const ColStyled = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: ${!isHome ? 'center' : direction == 'left' ? 'flex-end' : 'flex-start'};
		align-items: center;
		padding-top: 60px;
		padding-bottom: 60px;
		${padding}
	`;

	return <ColStyled className={`${direction} --bg-${bg}`}>{children}</ColStyled>;
}
