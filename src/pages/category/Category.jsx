import { useData } from "/src/context/ReactContext";
import { Footer, Header, SecondNav } from "../../components/common";
import { Intro } from "../../components/specific/intro";
import { useParams } from "react-router-dom";
import { ProdGallery } from "../../components/common/prodGallery/ProdGallery";
import { Questions } from "../../components/specific/questions";

import "./category.css";
export const Category = () => {
	const { category } = useParams();
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
		faq,
	} = useData();
	if (loading) return <div>🍔 Cargando producto...</div>;
	if (error) return <div>Error: {error.message}</div>;
	const data = {
		productList: [],
		introData: [],
	};
	const prepareData = (category) => {
		category === "combos"
			? ((data.productList = combos), (data.introData = null))
			: category === "hamburguesas"
			? ((data.productList = hamburguesas),
			  (data.introData = faq.find((faq) => faq.id === 144)))
			: category === "pollo"
			? ((data.productList = pollo),
			  (data.introData = faq.find((faq) => faq.id === 145)))
			: category === "loncheritas"
			? ((data.productList = loncheritas),
			  (data.introData = faq.find((faq) => faq.id === 146)))
			: category === "complementos"
			? ((data.productList = complementos),
			  (data.introData = faq.find((faq) => faq.id === 147)))
			: category === "bebidas"
			? ((data.productList = bebidas), (data.introData = null))
			: category === "helados"
			? ((data.productList = helados),
			  (data.introData = faq.find((faq) => faq.id === 148)))
			: category === "inka-chips"
			? ((data.productList = inkaChips), (data.introData = null))
			: null;
	};
	prepareData(category);

	return (
		<>
			<div className="Category-header">
				<Header hasSecondNav={true} />
			</div>

			<main className="Category">
				<h1 className="Category-title">
					{category === "combos"
						? "Conoce nuestros combos | BEMBOS"
						: category === "hamburguesas"
						? "Conoce nuestras irresistibles hamburguesas | BEMBOS"
						: category === "pollo"
						? "Descubre nuestro irresistible menú de pollo| BEMBOS"
						: category === "loncheritas"
						? "Descubre nuestras loncheras | BEMBOS"
						: category === "complementos"
						? "Conoce nuestros deliciosos complementos | BEMBOS"
						: category === "bebidas"
						? "Bebidas para refrescar tu día | BEMBOS"
						: category === "helados"
						? "Deliciosos helados para ti| BEMBOS"
						: category === "inka-chips"
						? "Descubre nuestras deliciosas inka-chips | BEMBOS"
						: null}
				</h1>

				<ProdGallery category={category} productList={data.productList} />

				<footer className="Category-footer">
					<Intro faq={data.introData} />
				</footer>
			</main>

			<Footer />
		</>
	);
};

export default Category;
