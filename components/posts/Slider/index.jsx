import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';

import styles, { slider } from './index.module.scss';

export default function Slider({ posts }) {
	const router = useRouter();
	console.log(posts);
	SwiperCore.use([EffectFade, Mousewheel, Pagination]);

	return <div>Swiper</div>;
}
