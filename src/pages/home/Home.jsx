import { useData } from "/src/context/ReactContext";
import { Header, Footer } from "/src/components/common";
import { Slider } from "/src/components/specific/home/slider";
import { SliderGallery } from "/src/components/specific/home/sliderGallery";
import { BannerCard } from "/src/components/specific/home/bannerCard";
import { SocialBanner } from "../../components/specific/home/socialBanner/SocialBanner";
import "./home.css";
import { FooterMenu } from "/src/components/rwd/footerMenu";
import { useMediaQuery } from "react-responsive";

export const Home = () => {
	const { promoOnline, menu } = useData();
	const isMobile = useMediaQuery({ query: "(max-width: 991px)" });

	return (
		<>
			<Header />

			<main className="Main-layout">
				<Slider />

				<div className="Home">
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




					{!isMobile && <SocialBanner />}
										
				</div>
			</main>

			<Footer />

			{isMobile && <FooterMenu />}
		</>
	);
};
