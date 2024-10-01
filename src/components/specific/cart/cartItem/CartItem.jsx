import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import "./cartItem.css";
export const CartItem = ({ product }) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => setShowDetails(!showDetails);
	const editItem = () => console.log("Se navega al editor de Items");
	const eliminateItem = () => console.log("Se eliminó el Item");
	const increaseItem = () => console.log("Se incrementó el Item");
	const decreaseItem = () => console.log("Se decrementó el Item");

	return (
		<article className="CartItem">
			<div className="CartItem-content">
				<section className="CartItem-info">
					<div className="CartItem-logo" onClick={editItem}>
						<div className="CartItem-edit">
							<img src="src/assets/icons/edit-icon.svg" alt="Editar" />
						</div>
						<img className="CartItem-img" src={product.img} alt="Imágen" />
					</div>
					<div className="CartItem-data">
						<h4 className="CartItem-title">
							{product.cantidad} x {product.nombre}
						</h4>
						<p className="CartItem-price">S/. {product.precio}</p>
					</div>
				</section>

				<section className="CartItem-action">
					<div className="CartItem-action-group">
						<img
							onClick={eliminateItem}
							className="CartItem-action-delete"
							src="https://www.bembos.com.pe/_nuxt/img/delete.b647968.svg"
							alt="Eliminar"
						/>
						<button onClick={toggleDetails} className="CartItem-action-details">
							{showDetails ? "Leer menos" : "Leer más"}
						</button>
					</div>

					<div className="CartItem-ctrl">
						<button onClick={decreaseItem} className="CartItem-ctrl-minus">
							<FaMinus />
						</button>
						<p className="CartItem-ctrl-quantity">1</p>
						<button onClick={increaseItem} className="CartItem-ctrl-plus">
							<FaPlus />
						</button>
					</div>
				</section>
			</div>

			{showDetails && (
				<section className="CartItem-details">
					{product.details.map((item, index) => {
						return (
							<article key={index} className="CartItem-details-item">
								<h4 className="CartItem-details-title">{item.title}</h4>
								<div className="CartItem-details-info">
									{item.info.map((subItem, index) => {
										return (
											<p key={index}>
												1 x {subItem.cant} {subItem.detailItem} - S/.
												{subItem.price}
											</p>
										);
									})}
								</div>
							</article>
						);
					})}
				</section>
			)}
		</article>
	);
};

export default CartItem;
