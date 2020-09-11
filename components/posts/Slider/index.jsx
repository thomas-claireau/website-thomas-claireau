import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Navigation, Virtual } from 'swiper';
import { motion } from 'framer-motion';

import styles, { slider, informations, avatar, date, description, go } from './index.module.scss';

import SlashDate from 'utils/SlashDate';
import ClockSvg from 'public/assets/img/clock.svg';

export default function Slider({ data }) {
	const [state, setState] = useState(data);
	const router = useRouter();
	SwiperCore.use([EffectFade, Mousewheel, Navigation, Virtual]);

	const isNavigation = state && state.length > 3;

	const transition = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	console.log(data);

	useEffect(() => {
		setState(data);
	}, [data]);

	return (
		<motion.div className={slider} variants={transition} initial="hidden" animate="visible">
			<div
				className={`${styles['swiper-button-prev']} swiper-button-prev ${
					!isNavigation ? '--hide' : ''
				}`}
			/>
			<Swiper
				className={`${styles['swiper-container']} swiper-container slider-posts`}
				slidesPerView={3}
				direction="horizontal"
				effect="slide"
				spaceBetween={100}
				grabCursor
				mousewheel
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				virtual
				onSwiper={(swiper) => console.log(state)}
			>
				{state &&
					state.map((post) => {
						return (
							<SwiperSlide
								tag="a"
								href={`${router.route}/${post.slug}`}
								key={post.id}
								className={styles['swiper-slide']}
							>
								<div>
									<img src={post.main_image.url} alt={post.main_image.caption} />
									<h2>{post.header.title}</h2>
									<div className={informations}>
										<div className={avatar}>
											<img
												src={post.user.avatar.url}
												alt={post.user.avatar.caption}
											/>
											<span>{`${post.user.username} ${post.user.name}`}</span>
										</div>
										<div className={date}>
											<SlashDate date={post.created_at} />
										</div>
									</div>
									<div className={description}>
										{post.header.meta_description}
									</div>
								</div>
								<div className={go}>
									<div>
										<ClockSvg />
										{`${post.time}min`}
									</div>
									<i className="fa fa-angle-right" aria-hidden="true"></i>
								</div>
							</SwiperSlide>
						);
					})}
			</Swiper>
			<div
				className={`${styles['swiper-button-next']} swiper-button-next ${
					!isNavigation ? '--hide' : ''
				}`}
			/>
		</motion.div>
	);
}
