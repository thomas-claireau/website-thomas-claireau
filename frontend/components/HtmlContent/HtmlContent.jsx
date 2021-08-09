import { useState, useEffect, useLayoutEffect } from 'react';
import Prism from 'prismjs';
import marked from 'marked';
import style from './HtmlContent.module.scss';

export default function HtmlContent({ children, className, ...props }) {
	const [htmlContent, setHtmlContent] = useState(<div></div>);

	useEffect(() => {
		Prism.highlightAll();

		// exterial link -> target blank
		const links = document.querySelectorAll('.html-content a');

		links.forEach((link) => {
			if (!link.href.includes(window.location.hostname))
				link.target = '_blank';
		});
	}, [htmlContent]);

	useLayoutEffect(() => {
		setHtmlContent(
			<div
				{...props}
				className={`html-content ${style['html-content']} ${className}`}
				dangerouslySetInnerHTML={{
					__html: children ? marked(children) : '',
				}}
			/>
		);
	}, []);

	return htmlContent;
}
