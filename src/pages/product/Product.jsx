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
	const categoryLink = `/menu/${category}`;
	const productLink = `/menu/${category}/${product}`;
	const itemToAdd = {
		id: 11,
		nombre: "Hamburguesa Clásica Bembos",
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
	};

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
						<Link className="Product-url-link" to={categoryLink}>
							{category}
						</Link>
						{">"}
						<Link className="Product-url-link" to={productLink}>
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

			<DetailFooter itemToAdd={itemToAdd} />
		</>
	);
};

export default Product;
