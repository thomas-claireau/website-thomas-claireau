import Svg from 'utils/svg';
import { motion } from 'framer-motion';

import styles from './index.module.scss';

function Logos({ obj }) {
	return (
		<>
			<div className={styles.parent} title={obj.main_language.technologie}>
				<Svg styles={styles['svg-container']} url={obj.main_language.logo.url} />
			</div>
			<div className={styles.childrens}>
				{obj.others_languages.map((item) => {
					return (
						<Svg styles={styles['svg-container']} key={item.id} url={item.logo.url} />
					);
				})}
			</div>
		</>
	);
}

export default function LogosContainer({ languages }) {
	const transition = {
		hidden: { opacity: 0, y: '-100%' },
		visible: { opacity: 1, y: 0 },
	};

	const top = languages[0];
	const bottom = languages.filter((item, index) => index !== 0);

	return (
		<div className={styles['logos-container']}>
			<motion.div
				className={styles.top}
				variants={transition}
				initial="hidden"
				animate="visible"
			>
				<Logos obj={top} />
			</motion.div>
			<motion.div
				className={styles.bottom}
				variants={transition}
				initial="hidden"
				animate="visible"
			>
				<div className={styles.left}>
					<Logos obj={bottom[0]} />
				</div>
				<div className={styles.right}>
					<Logos obj={bottom[1]} />
				</div>
			</motion.div>
		</div>
	);
}
