import { CartItem } from "/src/components/specific/cart/cartItem";
import { IoCloseSharp } from "react-icons/io5";
import "./cart.css";

export const Cart = () => {
	const cartList = [
		{
			id: 11,
			nombre: "Hamburguesa Clásica Bembos",
			cantidad: 1,
			precio: 17.9,
			img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-clasica_1_1.jpg",
		},
	];

	return (
		<div className="Cart">
			<div className="Cart-background"></div>
			<section className="Cart-overlay">
				<div className="Cart-menu">
					<span className="Cart-close">
						<IoCloseSharp />
					</span>
				</div>

				{cartList.length > 0 ? (
					<div className="Cart-content">
						<header className="Cart-header">
							<h2 className="Cart-title">Tu Carrito</h2>
							<p className="Cart-coupons">
								<strong>¿Cuentas con cupones de Dscto?</strong> Ingrésalos en el
								siguiente paso
							</p>
						</header>

						<main className="Cart-main">
							<section className="Cart-listProducts">
								{cartList.map((product) => {
									return (
										<div className="Cart-card" key={product.id}>
											<CartItem product={product} />
										</div>
									);
								})}
							</section>
							<section className="Cart-cost">
								<div className="Cart-extras Cart-card">
									<div className="Cart-subtotal">
										<p className="Cart-subtotal-title">Subtotal</p>
										<p className="Cart-subtotal-price">S/. 50.70</p>
									</div>
									<div className="Cart-delivery">
										<p className="Cart-delivery-title">Delivery</p>
										<p className="Cart-delivery-price">S/. 00.00</p>
									</div>
								</div>
								<div className="Cart-total Cart-card">
									<p className="Cart-total-title">Total a pagar</p>
									<p className="Cart-total-price">S/. 50.70</p>
								</div>
							</section>
						</main>

						<footer className="Cart-footer">
							<button className="Cart-button Cart-pay">
								<div className="Cart-pay-counter">1</div>
								<p className="Cart-pay-text">Ir a pagar</p>
								<div className="Cart-pay-price">S/. 52.10</div>
							</button>

							<button className="Cart-button Cart-continue">
								Seguir comprando
							</button>
						</footer>
					</div>
				) : (
					<main className="Cart-empty">
						<img
							className="Cart-empty-icon"
							src="/src/assets/icons/cart-empty.svg"
							alt="Carrito vacío"
						/>
						<h3 className="Cart-empty-title">Tu canasta está vacía</h3>
						<p className="Cart-empty-text">
							Te invitamos a volver a nuestras tiendas y agregar productos a tu
							canasta
						</p>
					</main>
				)}
			</section>
		</div>
	);
};

export default Cart;
