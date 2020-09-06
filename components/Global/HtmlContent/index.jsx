import marked from 'marked';

import { content } from './index.module.scss';

export default function HtmlContent({ children, className, ...props }) {
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
