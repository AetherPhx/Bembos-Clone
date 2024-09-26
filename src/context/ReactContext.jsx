import { createContext, useState, useContext, useEffect } from "react";

// const UserContext = createContext();
const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
	const [combos, setCombos] = useState([]);
	const [loncheritas, setLoncheritas] = useState([]);

	useEffect(() => {
		setCombos([
			{
				nombre: "Combo Extrema",
				precio: 32.8,
				id: 1,
				img: "https://www.bembos.com.pe/_ipx/q_85,w_275,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-extrema-nuevo-bb.jpg",
				link: "combo-extrema",
			},
			{
				nombre: "Combo Carretillera",
				precio: 30.8,
				id: 2,
				img: "https://www.bembos.com.pe/_ipx/q_85,w_275,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-carretillera-nuevo-bb.jpg",
				link: "combo-carretillera",
			},
		]);
		setLoncheritas([
			{
				tipos: [
					{
						nombre: "Loncherita básica de pollo",
						precio: 10.9,
						id: 26,
						img: "https://www.bembos.com.pe/_ipx/q_85,w_144,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/l/o/loncherita-basica-pollo.jpg",
						link: "loncherita-basica-de-pollo",
					},
					{
						nombre: "Loncherita Básica",
						precio: 10.9,
						id: 27,
						img: "https://www.bembos.com.pe/_ipx/q_85,w_144,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/l/o/loncherita-basica_1.jpg",
						link: "loncherita-basica",
					},
				],
			},
			{
				preguntas: [
					{
						nropregunta: 2,
						nombrepregunta: "ELIGE EL TAMAÑO DE TU PAPA",
						descrippregunta: "",
						combinaciones: [
							{
								nrocomb: 11,
								titulocomb: "Papa regular + S/.0.00",
								imgcomb:
									"https://www.bembos.com.pe/_ipx/q_60,s_72x72/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-papas-reg_2.webp",
								preccomb: 0,
							},
							{
								nrocomb: 12,
								titulocomb: "Papa Mediana + S/.1.00",
								imgcomb:
									"https://www.bembos.com.pe/_ipx/q_60,s_72x72/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/a/papas_grandes_1_1_2.webp",
								preccomb: 1,
							},
							{
								nrocomb: 13,
								titulocomb: "Papa Grande + S/.2.00",
								imgcomb:
									"https://www.bembos.com.pe/_ipx/q_60,s_72x72/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/p/a/papas_grandes_2_1.webp",
								preccomb: 2,
							},
						],
					},
				],
			},
		]);
	}, []);

	const cambiarUsuario = () => {
		if (user) {
			setUser(null);
		} else {
			setUser({
				nombre: "Luis",
				apellido: "Mendoza",
			});
		}
	};

	return (
		<DataContext.Provider value={{ user, cambiarUsuario }}>
			{children}
		</DataContext.Provider>
	);
};
