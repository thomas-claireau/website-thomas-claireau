import styles from './index.module.scss';

import Svg from 'utils/svg';

export default function SidebarInfo({ label, value, link, github, multiple }) {
	if (!label || !value || !value.length) return null;

	if (multiple) {
		return (
			<li className={styles['sidebar-info']}>
				<div className={styles.label}>{label}</div>
				{value.map((data) => {
					const { id, item, logo } = data;

					return (
						<div key={id} className={styles.value}>
							{logo && <Svg url={logo.url} />}
							{item}
						</div>
					);
				})}
			</li>
		);
	}

	return (
		<li className={styles['sidebar-info']}>
			<div className={styles.label}>{label}</div>
			{link ? (
				<a
					href={github ? `https://github.com/${value}` : value}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.value}
				>
					{value}
				</a>
			) : (
				<div className={styles.value}>{value}</div>
			)}
		</li>
	);
}
