import { FaPen, FaMinus, FaPlus } from "react-icons/fa";
import "./cartProduct.css";
export const CartProduct = ({ product }) => {
	return (
		<article className="CartItem">
			<div className="CartItem-content">
				<section className="CartItem-info">
					<div className="CartItem-logo">
						<div className="CartItem-edit">
							<img src="src/assets/icons/edit-icon.svg" alt="Editar" />
						</div>
						<img className="CartItem-img" src={product.img} alt="Imágen" />
					</div>
					<div className="CartItem-data">
						<h4 className="CartItem-title">{product.nombre}</h4>
						<p className="CartItem-price">S/. {product.precio}</p>
					</div>
				</section>

				<section className="CartItem-action">
					<div className="CartItem-action-group">
						<img
							className="CartItem-action-delete"
							src="https://www.bembos.com.pe/_nuxt/img/delete.b647968.svg"
							alt="Eliminar"
						/>
						<button className="CartItem-action-details">Leer más</button>
					</div>

					<div className="CartItem-ctrl">
						<button className="CartItem-ctrl-minus">
							<FaMinus />
						</button>
						<p className="CartItem-ctrl-quantity">1</p>
						<button className="CartItem-ctrl-plus">
							<FaPlus />
						</button>
					</div>
				</section>
			</div>

			<section style={{ display: "none" }} className="CartItem-details">
				<article className="CartItem-details-item">
					<h4 className="CartItem-details-title">
						Elige el tamaño de tu hamburguesa
					</h4>
					<div className="CartItem-details-info">
						<p>1 x 1 Clásica Mediana - S/.17.90</p>
					</div>
				</article>
			</section>
		</article>
	);
};

export default CartProduct;
