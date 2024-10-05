import { useData } from "/src/context/ReactContext";
import { useCart } from "../../context/CartContext";
import { useParams, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Header, DetailFooter } from "../../components/common";

import "./product.css";
import { IoChevronBackCircle } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Faqs } from "../../components/specific/faqs/Faqs";
export const Product = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
	const openLeftMenu = () => {
		console.log("Se abrió el menu lateral de la izq");
	};
	const { cart } = useCart();
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
		preguntas,
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

	const getDetailsData = () => {
		item.preguntas;
		const listaPreguntas = preguntas.filter((pregunta) =>
			item.preguntas.includes(pregunta.id)
		);
		console.log(listaPreguntas);
		return listaPreguntas;
	};
	getDetailsData();

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
		<div className="Product">
			{!isMobile && <Header />}
			{isMobile && (
				<header className="Header">
					<div className="Menu-publi-delivery">
						<img src="/src/assets/navMain/bmb-delivery.jpg" alt="img08" />
					</div>

					<div className="Product-menuBar">
						<Link to={categoryLink}>
							<IoChevronBackCircle className="Product-menuBar-back" />
						</Link>

						<div className="Product-menuBar-actions">
							<Link to="/cart" className="Product-menuBar-cart">
								<div className="Product-menuBar-counter">{cart.length}</div>
								<svg
									data-v-1a0fdd4b=""
									xmlns="http://www.w3.org/2000/svg"
									width="32.009"
									height="32.009"
									viewBox="0 0 32.009 32.009"
								>
									<path
										d="M24.749 23.006H10.066a2.5 2.5 0 0 1-2.481-2.19l-2.3-18.388H1.212a1.214 1.214 0 0 1 0-2.428h5.144a1.214 1.214 0 0 1 1.2 1.063l.671 5.367h22.566a1.214 1.214 0 0 1 1.141 1.629l-4.837 13.3a2.508 2.508 0 0 1-2.348 1.647zM8.537 8.86l1.457 11.656a.072.072 0 0 0 .072.063h14.683a.072.072 0 0 0 .068-.048L29.062 8.86zM24.364 32.008a3.786 3.786 0 1 1 3.786-3.786 3.79 3.79 0 0 1-3.786 3.786zm0-5.145a1.358 1.358 0 1 0 1.358 1.358 1.36 1.36 0 0 0-1.358-1.357zM10.217 32.008a3.786 3.786 0 1 1 3.786-3.786 3.79 3.79 0 0 1-3.786 3.786zm0-5.145a1.358 1.358 0 1 0 1.359 1.359 1.36 1.36 0 0 0-1.359-1.358z"
										fill="#21388b"
									></path>
								</svg>
							</Link>
							<FiMenu onClick={openLeftMenu} className="Product-menuBar-open" />
						</div>
					</div>

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
				</header>
			)}

			<div className="Main-layout Product-content">
				<aside className="Product-aside">
					{!isMobile && (
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
					)}
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
						<Faqs estilos={getDetailsData()} />
					</div>
				</main>
			</div>

			<DetailFooter itemToAdd={itemToAdd} />
		</div>
	);
};

export default Product;
