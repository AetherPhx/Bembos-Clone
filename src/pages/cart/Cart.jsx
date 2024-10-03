import { CartItem } from "/src/components/specific/cart/cartItem";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./cart.css";

export const Cart = () => {
	const navigate = useNavigate();
	const { subTotal } = useCart();
	const deliveryCost = 0.0;
	const cartList = [
		{
			id: 11,
			nombre: "Hamburguesa Clásica Bembos",
			cantidad: 1,
			precio: 17.9,
			img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-clasica_1_1.jpg",
			details: [
				{
					title: "Elige el tamaño de tu hamburguesa",
					info: [
						{
							cant: 1,
							detailItem: "Clásica Mediana",
							price: "S/.17.90",
						},
					],
				},
				{
					title: "Agregar Ingredientes",
					info: [
						{
							cant: 1,
							detailItem: "Huevo Frito",
							price: "S/.2.00",
						},
						{
							cant: 1,
							detailItem: "Papas al Hilo Extra",
							price: "S/.2.00",
						},
						{
							cant: 1,
							detailItem: "Plátano Frito Extra",
							price: "S/.2.00",
						},
						{
							cant: 1,
							detailItem: "Queso Medium Extra",
							price: "S/.2.00",
						},
						{
							cant: 1,
							detailItem: "Tocino Extra",
							price: "S/.2.00",
						},
					],
				},
			],
		},
	];

	const closeCart = () => {
		navigate(-1);
	};

	return (
		<div className="Cart">
			<div className="Cart-background"></div>
			<section className="Cart-overlay">
				<div className="Cart-menu">
					<span onClick={closeCart} className="Cart-close">
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
										<p className="Cart-subtotal-price">
											S/. {subTotal.toFixed(2)}
										</p>
									</div>
									<div className="Cart-delivery">
										<p className="Cart-delivery-title">Delivery</p>
										<p className="Cart-delivery-price">
											S/. {deliveryCost.toFixed(2)}
										</p>
									</div>
								</div>
								<div className="Cart-total Cart-card">
									<p className="Cart-total-title">Total a pagar</p>
									<p className="Cart-total-price">
										S/. {(subTotal + deliveryCost).toFixed(2)}
									</p>
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
