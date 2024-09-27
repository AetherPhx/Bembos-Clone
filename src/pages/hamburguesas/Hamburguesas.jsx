import { useData } from "/src/context/ReactContext";
import { Header, Footer } from "/src/components/common";
import { ProdGallery } from "../../components/common/prodGallery/ProdGallery";
import "./Hamburguesas.css";
export const Hamburguesas = () => {
	const { hamburguesas } = useData();

	return (
		<>
			{/* <Header /> */}

			<main className="Hamburguesas">
				<h1></h1>
				<ProdGallery productList={hamburguesas} />
			</main>

			{/* <Footer /> */}
		</>
	);
};

export default Hamburguesas;
