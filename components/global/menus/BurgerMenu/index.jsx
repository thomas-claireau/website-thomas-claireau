import styles, { open, close } from './index.module.scss';

export default function BurgerMenu({ action, onClick }) {
	const handleClick = function (e) {
		onClick();
	};

	return (
		<div
			className={`${styles['burger-menu']} ${action == 'open' ? open : close}`}
			onClick={handleClick}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
