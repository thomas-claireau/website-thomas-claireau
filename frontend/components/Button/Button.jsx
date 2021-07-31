import Link from 'next/link';

import styles, { button } from './Button.module.scss';

export default function Button({ className, icon, text, url, type, blank }) {
	return (
		<Link href={url}>
			<a
				target={blank ? '_blank' : ''}
				className={`${className} ${button} ${styles[type]}`}
			>
				{icon}
				<span>{text}</span>
			</a>
		</Link>
	);
}
