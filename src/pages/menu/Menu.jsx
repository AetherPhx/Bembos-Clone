import { Header, Footer } from "../../components/common";
import { CardMenu } from "../../components/specific/menu/cardMenu";
export const Menu = () => {
	return (
		<div className="Menu">
			<Header />

			<CardMenu />

			<Footer />
		</div>
	);
};

export default Menu;
