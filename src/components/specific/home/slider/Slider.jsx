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
import "./Slider.css";

export const Slider = () => {
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
						src="src/components/specific/home/slider/images/slider01.jpg"
						alt="Img01"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/slider/images/slider02.jpg"
						alt="Img02"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/slider/images/slider03.jpg"
						alt="Img03"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/slider/images/slider04.jpg"
						alt="Img04"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/slider/images/slider05.jpg"
						alt="Img05"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="src/components/specific/home/slider/images/slider06.jpg"
						alt="Img06"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
