import { menuItem } from './MenuItem.module.scss';

export default function Menu({ children }) {
	return <div className={menuItem}>{children}</div>;
}
