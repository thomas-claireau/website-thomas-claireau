import marked from 'marked';
import styled from '@emotion/styled';

export default function HtmlContent({ children, ...props }) {
	const HtmlContentStyled = styled.div`
		margin-top: 40px;
	`;

	return (
		<HtmlContentStyled
			{...props}
			dangerouslySetInnerHTML={{
				__html: marked(children),
			}}
		/>
	);
}
