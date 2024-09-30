import { ProdItem } from "./prodItem/ProdItem";
import "./ProdGallery.css";
import { Link } from "react-router-dom";
export const ProdGallery = ({ category, productList }) => {
	return (
		<section className="ProdGallery">
			{productList.map((prod, index) => {
				return (
					<Link key={index} to={`/menu/${category}/${prod.link}`}>
						<ProdItem key={prod.id} prod={prod} />
					</Link>
				);
			})}
		</section>
	);
};
