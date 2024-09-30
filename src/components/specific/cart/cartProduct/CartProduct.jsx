import "./cartProduct.css";
export const CartProduct = ({ product }) => {
	return (
		<article className="CartProd">
			<img src="" alt={product.nombre} />
			<h4>{product.nombre}</h4>
			<p>{product.precio}</p>
		</article>
	);
};

export default CartProduct;
