import { Banner } from "/src/components/specific/banner";
import { SliderGallery } from "/src/components/specific/sliderGallery";

export const Home = () => {
	// TODO: Agregar banner únicamente con la primera imágen.
	// TODO: Desarrollar SliderGallery para "Promociones y Menú de Hamburguesas Online"

	return (
		<main>
			<h1 className="bembos">Bembos</h1>
			<Banner />

			<SliderGallery />

			{/* <SliderGallery /> */}
		</main>
	);
};
