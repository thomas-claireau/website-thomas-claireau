import 'dracula-prism/dist/css/dracula-prism.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-php.js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import style from './HtmlContent.module.scss';

export default function HtmlContent({
	tag = 'div',
	children,
	className,
	...props
}) {
	const Tag = tag;

	useEffect(() => {
		const timer = setTimeout(() => {
			Prism.highlightAll();

			const wpBlockCodes = document.querySelectorAll('.wp-block-code');

			wpBlockCodes.forEach((wpBlockCode) => {
				const title = wpBlockCode.title;

				if (title && !wpBlockCode.querySelector('span.title')) {
					wpBlockCode.insertAdjacentHTML(
						'afterbegin',
						`<span class="title">${title}</span>`
					);
				}
			});
		}, 1500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<Tag
			{...props}
			className={`html-content ${style['html-content']} ${className}`}
			dangerouslySetInnerHTML={{
				__html: children,
			}}
		/>
	);
}

HtmlContent.propTypes = {
	tag: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
