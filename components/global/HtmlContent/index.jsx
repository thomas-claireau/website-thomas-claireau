import { useEffect } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import { content } from './index.module.scss';

export default function HtmlContent({ children, className, ...props }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<div
			{...props}
			className={`${content} ${className}`}
			dangerouslySetInnerHTML={{
				__html: marked(children),
			}}
		></div>
	);
}
