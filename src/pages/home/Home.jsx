import { Header, Footer } from "/src/components/common";
import { Slider } from "/src/components/specific/home/slider";
import { useData } from "/src/context/ReactContext";
// import { Banner } from "/src/components/specific/home/banner";

import { SliderGallery } from "/src/components/specific/home/sliderGallery";
import { BannerCard } from "/src/components/specific/home/bannerCard";
import { SocialBanner } from "../../components/specific/home/socialBanner/SocialBanner";
import "./home.css";

export const Home = () => {
	// TODO: Agregar banner únicamente con la primera imágen.
	// TODO: Desarrollar SliderGallery para "Promociones y Menú de Hamburguesas Online"

	const { promoOnline, menu } = useData();

	return (
		<>
			<Header />

			<main >
				<Slider />
    
				<div className="Home">
					<SliderGallery title="MENÚ DE HAMBURGUESAS ONLINE" />

				<SliderGallery
					title="PROMOCIONES DE HAMBURGUESAS ONLINE"
					data={promoOnline}
					cardType="Promo"
				/>

				<SliderGallery
					title="MENÚ DE HAMBURGUESAS ONLINE"
					data={menu}
					cardType="Simple"
				/>
            
            <section className="Home-promos">
						<BannerCard url="https://d31npzejelj8v1.cloudfront.net/media/promotionspage/images/promo-store/default/1719412352_Banner-Delivery-home-left.webp" />
						<BannerCard url="https://d31npzejelj8v1.cloudfront.net/media/promotionspage/images/promo-store-mobile/default/1719412352_new-banner-cupones.webp" />
					</section>


					<SocialBanner />
				</div>
				
			</main>

			<Footer />
		</>
	);
};
