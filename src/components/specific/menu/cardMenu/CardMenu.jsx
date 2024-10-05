import { ItemCardMenu } from "./ItemCardMenu";

import "./CardMenu.css";
import { Link } from "react-router-dom";

export function CardMenu() {
	const urlBanner1 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-duo-qt-categoria-nuevo-mayo.webp";
	const urlBanner2 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/combo-churrita-509x360.webp";
	const urlBanner3 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-hamburguesas.webp";
	const urlBanner4 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-pollo.webp";
	const urlBanner5 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-menus-al-plato-categoria.webp";
	const urlBanner6 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/loncherita-509x360-nuevo.webp";
	const urlBanner7 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/complementos_desktop_1.webp";
	const urlBanner8 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-gaseosa.webp";
	const urlBanner9 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-categoria-bembos.webp";
	const urlBanner10 =
		"https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-inka-chips-nuevo.webp";

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<section className="Main-layout CardMenu-principal">
			<p className="Font-title">CONOCE NUESTRO MENÚ | BEMBOS</p>
			<div className="CardMenu-main">
				<div className="CardMenu-content">
					<Link to="/promociones">
						<ItemCardMenu
							title={"PROMOCIONES EXCLUSIVAS WEB"}
							imageUrl={urlBanner1}
						/>
					</Link>
					<Link to="/menu/combos">
						<ItemCardMenu title={"COMBOS"} imageUrl={urlBanner2} />
					</Link>
					<Link to="/menu/hamburguesas">
						<ItemCardMenu title={"HAMBURGUESAS"} imageUrl={urlBanner3} />
					</Link>
					<Link to="/menu/pollo">
						<ItemCardMenu title={"POLLO"} imageUrl={urlBanner4} />
					</Link>
					<Link to="/menu/menús-al-plato">
						<ItemCardMenu title={"MENÚS AL PLATO"} imageUrl={urlBanner5} />
					</Link>
					<Link to="/menu/loncheritas">
						<ItemCardMenu title={"LONCHERITAS"} imageUrl={urlBanner6} />
					</Link>
					<Link to="/menu/complementos">
						<ItemCardMenu title={"COMPLEMENTOS"} imageUrl={urlBanner7} />
					</Link>
					<Link to="/menu/bebidas">
						<ItemCardMenu title={"BEBIDAS"} imageUrl={urlBanner8} />
					</Link>
					<Link to="/menu/helados">
						<ItemCardMenu title={"HELADOS"} imageUrl={urlBanner9} />
					</Link>
					<Link to="/menu/inka-chips">
						<ItemCardMenu title={"INKA CHIPS"} imageUrl={urlBanner10} />
					</Link>

					<div className="CardMenu-to-top" onClick={scrollToTop}>
						<svg
							data-v-062f6f92=""
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="arrow-up"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}
