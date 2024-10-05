import { Faqs } from "../../components/specific/Faqs/Faqs";
import { useData } from "/src/context/ReactContext";

export const Test = () => {
	const { hamburguesas, preguntas } = useData();
	const item = hamburguesas[1];
	const getDetailsData = () => {
		item.preguntas;
		const listaPreguntas = preguntas.filter((pregunta) =>
			item.preguntas.includes(pregunta.id)
		);
		console.log(listaPreguntas);
		return listaPreguntas;
	};
	getDetailsData();

	return (
		<>
			<Faqs estilos={getDetailsData()} />
		</>
	);
};

export default Test;
