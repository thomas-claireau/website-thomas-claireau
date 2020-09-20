import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Pagination, Autoplay } from 'swiper';
import { motion } from 'framer-motion';

import styles, { slider, left, title, description, view, right } from './index.module.scss';

export default function Slider({ projets }) {
	const router = useRouter();
	SwiperCore.use([EffectFade, Mousewheel, Pagination, Autoplay]);

	const breakpoints = {
		1024: {
			slidesPerView: 1,
			direction: 'vertical',
		},
	};

	const transition = {
		hidden: {
			opacity: 0,
			x: '100%',
		},
		visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
	};

	const item = {
		hidden: {
			opacity: 0,
			x: '100%',
		},
		visible: { opacity: 1, x: 0 },
	};

	return (
		<Swiper
			className={`${slider} swiper-container slider-projets`}
			slidesPerView={1}
			breakpoints={breakpoints}
			direction="horizontal"
			effect="slide"
			grabCursor={true}
			mousewheel={true}
			pagination={{ clickable: true, dynamicBullets: true }}
			autoplay={{ delay: 2000, disableOnInteraction: true }}
			loop
		>
			{projets &&
				projets.map((projet) => {
					return (
						<SwiperSlide
							tag="a"
							href={`${router.route}/${projet.slug}`}
							key={projet.id}
							className={styles['swiper-slide']}
						>
							<motion.div
								className={`${left} left`}
								variants={transition}
								initial="hidden"
								animate="visible"
							>
								<motion.div variants={item} className={`${title} h1`}>
									{projet.header.title}
								</motion.div>
								<motion.p variants={item} className={description}>
									{projet.header.meta_description}
								</motion.p>
								<motion.div variants={item} className={view}>
									Voir le projet
								</motion.div>
							</motion.div>
							<div className={`${right} right`}>
								<img
									src={projet.header.main_image.url}
									alt={projet.header.main_image.caption}
								/>
							</div>
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
}
