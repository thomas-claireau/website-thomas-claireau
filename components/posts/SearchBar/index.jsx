import { useState } from 'react';
import styles, { active } from './index.module.scss';

export default function SearchBar({ handlePress, handleClick }) {
	const [state, setState] = useState(null);
	const [animate, setAnimate] = useState(false);

	function onChange(event) {
		const value = event.target.value;

		setState(value);

		if (value) {
			setAnimate(true);

			setTimeout(() => {
				setAnimate(false);
			}, 6000);
		} else {
			setAnimate(false);
		}
	}

	function onKeyDown(event) {
		if (event.key === 'Enter') handlePress(state);
	}

	function onClick() {
		handleClick(state);
	}

	return (
		<div className={styles['search-bar']}>
			<div className={animate ? active : ''}>
				<input
					type="text"
					placeholder="Rechercher un article..."
					onChange={onChange}
					onKeyDown={onKeyDown}
				/>
				<i className="fa fa-search" aria-hidden="true" onClick={onClick}></i>
			</div>
		</div>
	);
}
