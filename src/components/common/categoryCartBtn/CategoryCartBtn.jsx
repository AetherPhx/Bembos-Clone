import { Link } from "react-router-dom";
import "./CategoryCartBtn.css";

export const CategoryCartBtn = () => {
	return (
		<Link to="/cart">
			<div className="section-button-cart">
				<div className="section-button-cart-button">
					<img
						src="https://www.bembos.com.pe/_nuxt/img/carrito.76e8a3a.svg"
						alt="carrito"
					/>
					<p className="cart-button-span">Ver Carrito de compras</p>
					<span className="cart-button-span">s/ 45.20</span>
				</div>
			</div>
		</Link>
	);
};

export default CategoryCartBtn;
