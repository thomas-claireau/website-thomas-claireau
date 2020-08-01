import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export default function Col({ direction, bg, children }) {
	const router = useRouter();

	console.log(router);
	const ColStyled = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: ${router.pathname !== '/'
			? 'center'
			: direction == 'left'
			? 'flex-end'
			: 'flex-start'};
		align-items: center;
	`;

	return <ColStyled className={`${direction} --bg-${bg}`}>{children}</ColStyled>;
}
