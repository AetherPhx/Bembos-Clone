import { useData } from "/src/context/ReactContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header, DetailFooter } from "../../components/common";

import "./product.css";
export const Product = () => {
	const { category, product } = useParams();
	const {
		loading,
		error,
		combos,
		hamburguesas,
		pollo,
		loncheritas,
		complementos,
		bebidas,
		helados,
		inkaChips,
	} = useData();
	if (loading) return <div>🍔 Cargando producto...</div>;
	if (error) return <div>Error: {error.message}</div>;
	const getCategoryData = (category) => {
		if (category === "combos") return combos;
		else if (category === "hamburguesas") return hamburguesas;
		else if (category === "pollo") return pollo;
		else if (category === "loncheritas") return loncheritas;
		else if (category === "complementos") return complementos;
		else if (category === "bebidas") return bebidas;
		else if (category === "helados") return helados;
		else if (category === "inka-chips") return inkaChips;
		else return null;
	};
	const categoryData = getCategoryData(category);
	const item = categoryData.find((item) => item.link == product);
	if (!item) return <div>Producto no encontrado</div>;

	return (
		<>
			<Header />

			<div className="Product-content">
				<aside className="Product-aside">
					<ul className="Product-url">
						<Link className="Product-url-link" to="/">
							Inicio
						</Link>
						{">"}
						<Link className="Product-url-link" to="/menu">
							Menú
						</Link>
						{">"}
						<Link className="Product-url-link" to="/menu/hamburguesas">
							{category}
						</Link>
						{">"}
						<Link
							className="Product-url-link"
							to="/menu/hamburguesas/hamburguesa-clasica-bembos"
						>
							{item.nombre}
						</Link>
					</ul>
					<img className="Product-image" src={item.img} alt="Product" />
				</aside>

				<main className="Product-info">
					<h1 className="Product-name">{item.nombre}</h1>

					<div className="Product-desc">
						<p>
							¿Ya probaste la deliciosa hamburguesa a la parrilla clásica
							Bembos? Con su delicioso sabor ahumado y consistencia
							característica, este clásico Bembos lleva como ingredientes:
						</p>
						<p>- Mayonesa - Tomate - Lechuga</p>
						<p>
							Agrega gratis: Mayonesa (01), Ají Bembos (01) y Kétchup (01).
							¡Pídela ya con delivery!
						</p>
					</div>

					<div className="Product-options">
						<p>Opcion 1</p>
						<p>Opcion 2</p>
						<p>Opcion 3</p>
					</div>
				</main>
			</div>

			<DetailFooter />
		</>
	);
};

export default Product;
