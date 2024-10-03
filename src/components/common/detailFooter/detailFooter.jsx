import { useCart } from "/src/context/CartContext";
import "./detailFooter.css";
import { useState } from "react";

export const DetailFooter = ({ itemToAdd }) => {
	const [itemCant, setItemCant] = useState(itemToAdd.cantidad);
	const [itemPrice, setItemPrice] = useState(itemToAdd.precio);
	const { addItem } = useCart();

	const incrementItem = () => {
		setItemCant(itemCant + 1);
		setItemPrice(itemPrice + itemToAdd.precio);
	};

	const decrementItem = () => {
		itemCant > 1
			? (setItemCant(itemCant - 1), setItemPrice(itemPrice - itemToAdd.precio))
			: null;
	};

	const purchaseItem = () => {
		itemToAdd.cantidad = itemCant;
		itemToAdd.precio = itemPrice;
		addItem(itemToAdd);
	};

	return (
		<div className="Detail-footer">
			<div className="Detail-footer-contenedor contenedor">
				<div className="Detail-footer-left">
					<p className="Detail-p">Cantidad</p>
					<button onClick={decrementItem} className="Detail-btn Detail-p">
						-
					</button>
					<p className="Detail-cant Detail-btn Detail-p">{itemCant}</p>
					<button onClick={incrementItem} className="Detail-btn Detail-p">
						+
					</button>
				</div>
				<div className="Detail-footer-right">
					<p className="Detail-pts">Acumulas 0Pts</p>
					<div className="Detail-footer-right-btn">
						<button onClick={purchaseItem} className="Detail-btn-send ">
							Agregar S/. {itemPrice.toFixed(2)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
