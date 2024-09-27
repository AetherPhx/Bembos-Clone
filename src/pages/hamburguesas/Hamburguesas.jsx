import { useData } from "/src/context/ReactContext";
import { Header, Footer, SecondNav } from "/src/components/common";
import { ProdGallery } from "../../components/common/prodGallery/ProdGallery";
import "./Hamburguesas.css";
export const Hamburguesas = () => {
	const { hamburguesas } = useData();

	return (
		<>
			<div className="Hamburguesas-header">
				<Header />
				<SecondNav />
			</div>

			<main className="Hamburguesas">
				<h1 className="Hamburguesas-title">
					Conoce nuestras irresistibles hamburguesas | BEMBOS
				</h1>
				<ProdGallery productList={hamburguesas} />
			</main>

			<Footer />
		</>
	);
};

export default Hamburguesas;
