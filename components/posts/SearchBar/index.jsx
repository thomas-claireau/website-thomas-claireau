import styles from './index.module.scss';

export default function SearchBar({ handleClick }) {
	return (
		<div className={styles['search-bar']}>
			<div>
				<input type="text" placeholder="Rechercher un article..." onChange={handleClick} />
				<i class="fa fa-search" aria-hidden="true"></i>
			</div>
		</div>
	);
}
