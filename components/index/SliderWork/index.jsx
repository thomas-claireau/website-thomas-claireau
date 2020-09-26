import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Link from 'next/link';

import styles, { container, title } from './index.module.scss';

import Container from 'components/global/layout/Container/index';

export default function SliderWork({ data }) {
	const { title: titre, view_all_label, view_all_link, projet_relation: projets } = data;

	SwiperCore.use([Autoplay]);

	const breakpoints = {
		1024: {
			slidesPerView: 3,
		},
		650: {
			slidesPerView: 2,
		},
	};

	return (
		<div className={styles['slider-work']}>
			<Container className={container}>
				<div className={title}>
					{titre}
					<Link href={view_all_link}>
						<a>{view_all_label}</a>
					</Link>
				</div>
			</Container>
			<Swiper
				className={styles['swiper-container']}
				slidesPerView={1}
				spaceBetween={30}
				breakpoints={breakpoints}
				freeMode={true}
				loop={true}
				speed={8000}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
			>
				{projets.map(({ projet }) => {
					const { id, header, slug } = projet;

					if (!id) return;

					return (
						<SwiperSlide className={styles['swiper-slide']} key={id}>
							<Link href={`${view_all_link}/${slug}`}>
								<a title={header.title}>
									<img src={header.main_image.url} alt={header.main_image.alt} />
								</a>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
