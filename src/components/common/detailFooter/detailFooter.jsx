import { useCart } from "/src/context/CartContext";
import "./detailFooter.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const DetailFooter = ({ itemToAdd }) => {
	const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
	const [itemCant, setItemCant] = useState(1);
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
		addItem(itemToAdd);
	};

	return (
		<div className={"Detail-footer"}>
			<div
				className={`Detail-footer-contenedor ${!isMobile ? "contenedor" : ""}`}
			>
				<div className="Detail-footer-left">
					{!isMobile && <p className="Detail-p">Cantidad</p>}
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
