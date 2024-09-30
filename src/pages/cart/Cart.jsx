import { IoCloseSharp } from "react-icons/io5";
import "./cart.css";

export const Cart = () => {
	const cartList = [];

	return (
		<div className="Cart">
			<div className="Cart-background"></div>
			<section className="Cart-overlay">
				<header className="Cart-header">
					<span className="Cart-close">
						<IoCloseSharp />
					</span>
				</header>

				{cartList.length > 0 ? (
					<main className="Cart-main">
						{cartList.map((product) => {
							return <div key={product.id}>{product.name}</div>;
						})}
					</main>
				) : (
					<main className="Cart-main">
						<img
							className="Cart-icon"
							src="/src/assets/icons/cart-empty.svg"
							alt="Carrito vacío"
						/>
						<h3 className="Cart-title">Tu canasta está vacía</h3>
						<p className="Cart-text">
							Te invitamos a volver a nuestras tiendas y agregar productos a tu
							canasta
						</p>
					</main>
				)}

				<footer className="Cart-footer"></footer>
			</section>
		</div>
	);
};

export default Cart;
