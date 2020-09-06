import styles from './index.module.scss';

import MenuBottom from 'components/global/menus/MenuBottom/index';

export default function ContentVM({ children }) {
	return (
		<div className={styles['content-vm']}>
			{children}
			<MenuBottom></MenuBottom>
		</div>
	);
}
