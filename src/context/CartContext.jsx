import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [subTotal, setSubTotal] = useState(0);

	useEffect(() => {
		setSubTotal(calcSubtotal());
	}, [cart]);

	// Cart Functions
	const generateItem = (id, nombre, imagen, precioUnitario, detalles) => {
		return {
			id: id,
			nombre: nombre,
			imagen: imagen,
			cantidad: 1,
			precioUnitario: precioUnitario,
			precioTotal: this.precioUnitario,
			detalles: detalles,
		};
	};

	const addItem = (data) => {
		const item = generateItem(
			data.id,
			data.nombre,
			data.imagen,
			data.precioUnitario,
			data.detalles
		);
		calculateTotal(item);
		setCart((prevCart) => [...prevCart, item]);
	};

	const removeItem = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const calcSubtotal = () => cart.reduce((acc, item) => acc + item.total, 0);

	// Item Functions
	const increaseItem = (id) => {
		setCart((prevCart) =>
			prevCart.map((item) => {
				return item.id === id
					? calculateTotal({ ...item, cantidad: item.cantidad + 1 })
					: item;
			})
		);
	};

	const reduceItem = (id) => {
		setCart((prevCart) =>
			prevCart.map((item) => {
				return item.id === id && item.cantidad > 1
					? calculateTotal({ ...item, cantidad: item.cantidad - 1 })
					: item;
			})
		);
	};

	const calculateTotal = (item) => {
		item.total = item.precioUnitario * item.cantidad;
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
