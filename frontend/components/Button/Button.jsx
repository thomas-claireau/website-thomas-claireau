import styles, { button } from './Button.module.scss';

export default function Button({ className, icon, text, url, type, blank }) {
	return (
		<a
			href={url}
			target={blank ? '_blank' : ''}
			className={`${className} ${button} ${styles[type]}`}
		>
			{icon}
			<span>{text}</span>
		</a>
	);
}
