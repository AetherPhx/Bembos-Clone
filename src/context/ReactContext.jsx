import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();
const BASE_URL = "http://localhost:3000/";

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [combos, setCombos] = useState([]),
		[hamburguesas, setHamburguesas] = useState([]),
		[pollo, setPollo] = useState([]),
		[loncheritas, setLoncheritas] = useState([]),
		[complementos, setComplementos] = useState([]),
		[bebidas, setBebidas] = useState([]),
		[helados, setHelados] = useState([]),
		[inkaChips, setInkaChips] = useState([]),
		[menu, setMenu] = useState([]),
		[promoOnline, setPromoOnline] = useState([]),
		[promoPersonales, setPromoPersonales] = useState([]),
		[promoDos, setPromoDos] = useState([]),
		[promoCompartir, setPromoCompartir] = useState([]),
		[cupones, setCupones] = useState([]),
		[locales, setLocales] = useState([]),
		[faq, setFaq] = useState([]),
		[preguntas, setPreguntas] = useState([]);

	useEffect(() => {
		const requestData = async () => {
			try {
				Promise.all([
					axios.get(BASE_URL + "combos"),
					axios.get(BASE_URL + "hamburguesas"),
					axios.get(BASE_URL + "pollo"),
					axios.get(BASE_URL + "loncheritas"),
					axios.get(BASE_URL + "complementos"),
					axios.get(BASE_URL + "bebidas"),
					axios.get(BASE_URL + "helados"),
					axios.get(BASE_URL + "inka-chips"),
					axios.get(BASE_URL + "menu"),
					axios.get(BASE_URL + "promociones_online"),
					axios.get(BASE_URL + "promociones_personales"),
					axios.get(BASE_URL + "promociones_para_dos"),
					axios.get(BASE_URL + "promociones_para_compartir"),
					axios.get(BASE_URL + "cupones"),
					axios.get(BASE_URL + "locales"),
					axios.get(BASE_URL + "faq"),
					axios.get(BASE_URL + "preguntas"),
				]).then(
					([
						combos,
						hamburguesas,
						pollo,
						loncheritas,
						complementos,
						bebidas,
						helados,
						inkaChips,
						menu,
						promoOnline,
						promoPersonales,
						promoDos,
						promoCompartir,
						cupones,
						locales,
						faq,
						preguntas,
					]) => {
						setCombos(combos.data);
						setHamburguesas(hamburguesas.data);
						setPollo(pollo.data);
						setLoncheritas(loncheritas.data);
						setComplementos(complementos.data);
						setBebidas(bebidas.data);
						setHelados(helados.data);
						setInkaChips(inkaChips.data);
						setMenu(menu.data);
						setPromoOnline(promoOnline.data);
						setPromoPersonales(promoPersonales.data);
						setPromoDos(promoDos.data);
						setPromoCompartir(promoCompartir.data);
						setCupones(cupones.data);
						setLocales(locales.data);
						setFaq(faq.data);
						setPreguntas(preguntas.data);
					}
				);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		requestData();
	}, []);

	return (
		<DataContext.Provider
			value={{
				loading,
				error,
				combos,
				hamburguesas,
				pollo,
				loncheritas,
				complementos,
				bebidas,
				helados,
				inkaChips,
				menu,
				promoOnline,
				promoPersonales,
				promoDos,
				promoCompartir,
				cupones,
				locales,
				faq,
				preguntas,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
