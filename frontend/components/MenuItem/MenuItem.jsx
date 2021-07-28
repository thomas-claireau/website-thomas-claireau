import { menuItem } from './MenuItem.module.scss';

export default function Menu({ className, children, onClick }) {
	return (
		<div className={`${className} ${menuItem}`} onClick={onClick}>
			{children}
		</div>
	);
}
