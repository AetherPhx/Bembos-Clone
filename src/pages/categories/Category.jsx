import { useData } from "/src/context/ReactContext";
import { Footer, Header, SecondNav } from "../../components/common";
import { useParams } from "react-router-dom";
import { ProdGallery } from "../../components/common/prodGallery/ProdGallery";
import { Questions } from "../../components/specific/questions";

import "./category.css";
export const Category = () => {
	const { category } = useParams();
	console.log(category);
	const {
		combos,
		hamburguesas,
		pollo,
		loncheritas,
		complementos,
		bebidas,
		helados,
		inkaChips,
	} = useData();

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
	const productList = getCategoryData(category);

	return (
		<>
			<div className="Category-header">
				<Header />
				<SecondNav />
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

				<ProdGallery productList={productList} />

				<footer className="Category-footer">
					<Questions />
				</footer>
			</main>

			<Footer />
		</>
	);
};

export default Category;
