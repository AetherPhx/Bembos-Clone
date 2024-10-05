import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
	EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "./SliderRwd.css";

export const SliderRwd = () => {
	return (
		<div className="Swiper-main">
			<Swiper
				modules={[
					Navigation,
					Pagination,
					Scrollbar,
					A11y,
					Autoplay,
					EffectFade,
				]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				effect="fade"
			>
				<SwiperSlide>
					<img
						src="src/components/specific/home/sliderRwd/images/01_slider.webp"
						alt="Img01"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/sliderRwd/images/02_slider.webp"
						alt="Img02"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/sliderRwd/images/03_slider.webp"
						alt="Img03"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/sliderRwd/images/04_slider.webp"
						alt="Img04"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/sliderRwd/images/05_slider.webp"
						alt="Img05"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
