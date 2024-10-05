import { Header, Footer } from "../../components/common";
import FooterMenu from "../../components/rwd/footerMenu/FooterMenu";
import { CardMenu } from "../../components/specific/menu/cardMenu";
import { useMediaQuery } from "react-responsive";
export const Menu = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
	return (
		<div className="Menu">
			<Header />

			<CardMenu />

			<Footer />

			{isMobile && <FooterMenu />}
		</div>
	);
};

export default Menu;
