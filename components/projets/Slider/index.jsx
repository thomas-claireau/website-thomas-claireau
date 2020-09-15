import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';

import styles, { slider, left, title, description, view, right } from './index.module.scss';

export default function Slider({ projets }) {
	const router = useRouter();
	SwiperCore.use([EffectFade, Mousewheel, Pagination]);

	const breakpoints = {
		1024: {
			slidesPerView: 1,
			direction: 'vertical',
		},
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
							<div className={`${left} left`}>
								<div className={`${title} h1`}>{projet.header.title}</div>
								<p className={description}>{projet.header.meta_description}</p>
								<div className={view}>Voir le projet</div>
							</div>
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
