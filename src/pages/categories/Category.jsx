import { Hamburguesas } from "./hamburguesas";
import { useParams } from "react-router-dom";
import "./category.css";

export const Category = () => {
	const { category } = useParams();

	return <Hamburguesas />;
};

export default Category;
