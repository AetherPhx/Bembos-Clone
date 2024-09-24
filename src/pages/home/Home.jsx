import { Banner } from "/src/components/specific/banner";
import { SliderGallery } from "/src/components/specific/sliderGallery";
import "./home.css";

export const Home = () => {
	// TODO: Agregar banner únicamente con la primera imágen.
	// TODO: Desarrollar SliderGallery para "Promociones y Menú de Hamburguesas Online"

	return (
		<main className="Home">
			{/* <Banner /> */}

			{/* <SliderGallery /> */}

			<SliderGallery title="MENÚ DE HAMBURGUESAS ONLINE" />
		</main>
	);
};
