import { useState, useEffect, useLayoutEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-markup-templating.js';
import 'dracula-prism/dist/css/dracula-prism.css';
import PropTypes from 'prop-types';

import style from './HtmlContent.module.scss';

export default function HtmlContent({
	tag = 'div',
	children,
	className,
	...props
}) {
	const Tag = tag;

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
