import { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [subTotal, setSubTotal] = useState(0.0);

	useEffect(() => {
		setSubTotal(calcSubtotal());
	}, [cart]);

	// Cart Functions
	const generateItem = (id, nombre, img, cantidad, precio, details) => {
		return {
			uuid: uuidv4(),
			id: id,
			nombre: nombre,
			img: img,
			cantidad: cantidad || 1,
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
			data.cantidad,
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
		item.precioTotal = item.precioUnitario * item.cantidad;
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
