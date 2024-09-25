// import { Banner } from "/src/components/specific/home/banner";
import { SliderGallery } from "/src/components/specific/home/sliderGallery";
import { BannerCard } from "/src/components/specific/home/bannerCard";
import { SocialBanner } from "../../components/specific/home/socialBanner/SocialBanner";
import "./home.css";

export const Home = () => {
	// TODO: Agregar banner únicamente con la primera imágen.
	// TODO: Desarrollar SliderGallery para "Promociones y Menú de Hamburguesas Online"

	return (
		<main className="Home">
			{/* <Banner /> */}

			{/* <SliderGallery /> */}

			<SliderGallery title="MENÚ DE HAMBURGUESAS ONLINE" />

			<section className="Home-promos">
				<BannerCard url="https://d31npzejelj8v1.cloudfront.net/media/promotionspage/images/promo-store/default/1719412352_Banner-Delivery-home-left.webp" />
				<BannerCard url="https://d31npzejelj8v1.cloudfront.net/media/promotionspage/images/promo-store-mobile/default/1719412352_new-banner-cupones.webp" />
			</section>

			<SocialBanner />
		</main>
	);
};
