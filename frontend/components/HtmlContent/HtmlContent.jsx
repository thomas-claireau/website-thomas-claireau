import { useState, useEffect, useLayoutEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-markup-templating.js';
import 'dracula-prism/dist/css/dracula-prism.css';
import marked from 'marked';
import style from './HtmlContent.module.scss';

export default function HtmlContent({ children, className, ...props }) {
	const [htmlContent, setHtmlContent] = useState(<div></div>);

	useEffect(() => {
		Prism.highlightAll();

		addTitleToBlockCode();

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

function addTitleToBlockCode() {
	const blockCodes = document.querySelectorAll('.wp-block-code');

	blockCodes.forEach((blockCode) => {
		const span = blockCode.querySelector('span.title');

		if (!span && blockCode.hasAttribute('title')) {
			const span = document.createElement('span');
			span.classList.add('title');
			span.innerHTML = `~ ${blockCode.title}`;

			blockCode.prepend(span);
		}
	});
}
