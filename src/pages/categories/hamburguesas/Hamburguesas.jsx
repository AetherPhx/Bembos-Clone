import { useData } from "/src/context/ReactContext";
import { Header, Footer, SecondNav } from "/src/components/common";
import { ProdGallery } from "../../../components/common/prodGallery/ProdGallery";
import { Acordeon } from "../../../components/specific/acordeon/Acordeon";
import "../category.css";
export const Hamburguesas = () => {
	const { hamburguesas } = useData();

	return (
		<>
			<div className="Category-header">
				<Header />
				<SecondNav />
			</div>

			<main className="Category">
				<h1 className="Category-title">
					Conoce nuestras irresistibles hamburguesas | BEMBOS
				</h1>

				<ProdGallery productList={hamburguesas} />

				<footer className="Category-footer">
					<Acordeon />
				</footer>
			</main>

			<Footer />
		</>
	);
};

export default Hamburguesas;
