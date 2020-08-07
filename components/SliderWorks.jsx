import Swiper from 'swiper';
import { useRef, useEffect } from 'react';

export default function SliderWorks({ children }) {
	const swiper = useRef(null);

	useEffect(() => {
		swiper.current = new Swiper('.swiper-container', {});
	}, []);

	return (
		<div className="swiper-container">
			<div className="swiper-wrapper">
				<div className="swiper-slide">slide 1</div>
				<div className="swiper-slide">slide 2</div>
				<div className="swiper-slide">slide 3</div>
				<div className="swiper-slide">slide 4</div>
			</div>
		</div>
	);
}
