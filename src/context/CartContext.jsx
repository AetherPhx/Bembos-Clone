import { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([
		// {
		// 	nombre: "Hamburguesa Clásica Bembos",
		// 	cantidad: 1,
		// 	precioUnitario: 17.9,
		// 	precioTotal: 17.9,
		// 	img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-clasica_1_1.jpg",
		// 	detalles: [
		// 		{
		// 			title: "Elige el tamaño de tu hamburguesa",
		// 			info: [
		// 				{
		// 					cant: 1,
		// 					detailItem: "Clásica Mediana",
		// 					price: "S/.17.90",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: "Agregar Ingredientes",
		// 			info: [
		// 				{
		// 					cant: 1,
		// 					detailItem: "Huevo Frito",
		// 					price: "S/.2.00",
		// 				},
		// 				{
		// 					cant: 1,
		// 					detailItem: "Papas al Hilo Extra",
		// 					price: "S/.2.00",
		// 				},
		// 				{
		// 					cant: 1,
		// 					detailItem: "Plátano Frito Extra",
		// 					price: "S/.2.00",
		// 				},
		// 				{
		// 					cant: 1,
		// 					detailItem: "Queso Medium Extra",
		// 					price: "S/.2.00",
		// 				},
		// 				{
		// 					cant: 1,
		// 					detailItem: "Tocino Extra",
		// 					price: "S/.2.00",
		// 				},
		// 			],
		// 		},
		// 	],
		// },
	]);
	const [subTotal, setSubTotal] = useState(0.0);

	useEffect(() => {
		setSubTotal(calcSubtotal());
	}, [cart]);

	// Cart Functions
	const generateItem = (id, nombre, img, precio, details) => {
		return {
			uuid: uuidv4(),
			id: id,
			nombre: nombre,
			img: img,
			cantidad: 1,
			precioUnitario: precio,
			precioTotal: precio,
			detalles: details,
		};
	};

	const addItem = (data) => {
		const item = generateItem(
			data.id,
			data.nombre,
			data.img,
			data.precio,
			data.details
		);
		calculateTotal(item);
		setCart((prevCart) => [...prevCart, item]);
	};

	const removeItem = (uuid) => {
		setCart((prevCart) => prevCart.filter((item) => item.uuid !== uuid));
	};

	const calcSubtotal = () => {
		console.log(cart);
		return cart.reduce((acc, item) => acc + item.precioTotal, 0);
	};

	// Item Functions
	const increaseItem = (uuid) => {
		setCart((prevCart) =>
			prevCart.map((item) => {
				return item.uuid === uuid
					? calculateTotal({ ...item, cantidad: item.cantidad + 1 })
					: item;
			})
		);
	};

	const reduceItem = (uuid) => {
		setCart((prevCart) =>
			prevCart.map((item) => {
				return item.uuid === uuid && item.cantidad > 1
					? calculateTotal({ ...item, cantidad: item.cantidad - 1 })
					: item;
			})
		);
	};

	const calculateTotal = (item) => {
		console.group(`Item: ${item.nombre}`);
		console.log(`Precio Unitario: ${item.precioUnitario}`);
		console.log(`Cantidad: ${item.cantidad}`);
		console.log(`Precio Total antes de calcular: ${item.total}`);
		item.total = item.precioUnitario * item.cantidad;
		console.log(`Total: ${item.total}`);
		console.groupEnd();
		return item;
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				subTotal,
				addItem,
				removeItem,
				increaseItem,
				reduceItem,
				calculateTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
