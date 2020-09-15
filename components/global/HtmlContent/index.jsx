import { useState, useEffect, useLayoutEffect } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import { content } from './index.module.scss';

export default function HtmlContent({ children, className, ...props }) {
	const [htmlContent, setHtmlContent] = useState(<div></div>);

	useEffect(() => {
		Prism.highlightAll();
	}, [htmlContent]);

	useLayoutEffect(() => {
		setHtmlContent(
			<div
				{...props}
				className={`${content} ${className}`}
				dangerouslySetInnerHTML={{
					__html: marked(children),
				}}
			/>
		);
	}, []);

	return htmlContent;
}
