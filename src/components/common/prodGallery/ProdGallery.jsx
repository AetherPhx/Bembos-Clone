import { ProdItem } from "./prodItem/ProdItem";
import "./ProdGallery.css";
export const ProdGallery = ({ productList }) => {
	return (
		<section className="ProdGallery">
			{productList.map((prod) => {
				return <ProdItem key={prod.id} prod={prod} />;
				// return <p>{prod.nombre}</p>;
			})}
		</section>
	);
};
