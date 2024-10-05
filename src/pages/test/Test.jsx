import { Slider } from "../../components/specific/home/slider/Slider";
import { SliderRwd } from "../../components/specific/home/sliderRwd/SliderRwd";
import { Cart } from "../cart";


import { Faqs } from "../../components/specific/Faqs/Faqs";

export const Test = () => {
	const estilosProducts = [
		{ id: 150, titulo: 'DESEA COMBEAR', estilo: 'Style1' },
		{ id: 154, titulo: '¿DESEAS ALGÚN EXTRA?', estilo: 'Style2' },
		{ id: 153, titulo: 'ELIGE SABOR DE TU GASEOSA', estilo: 'Style3' },
		{ id: 158, titulo: '¿DESEAS ELEGIR SALSAS?', estilo: 'Style4' },
		{ id: 159, titulo: '¿DESEAS SALSAS EXTRAS?', estilo: 'Style5' },
	];
	return (
		<>

			{/* <Faqs estilos={estilosProducts} /> */}
			<SliderRwd />

		</>
	);
};

export default Test;


