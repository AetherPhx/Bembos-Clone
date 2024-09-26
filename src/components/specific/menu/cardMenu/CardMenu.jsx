import { ItemCardMenu } from "./ItemCardMenu";

import "./CardMenu.css";

export function CardMenu() {
	const urlBanner1 =
		"https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/promociones-bembos-delivery.webp";
	const urlBanner2 =
		"https://www.bembos.com.pe/_ipx/q_60,s_230x308/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/combo-churrita-500x669.webp";
	const urlBanner3 =
		"https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/hamburguesas_2.webp";
	const urlBanner4 =
		"https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/pollo_2.webp";
	const urlBanner5 =
		"https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/loncheritas_1.webp";
	const urlBanner6 =
		"https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/complementos_1.webp";
	const urlBanner7 =
		"https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-gaseosas.webp";
	const urlBanner8 =
		"https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-mini-princesa.webp";
	const urlBanner9 =
		"https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-inka-chips-1.webp";

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="CardMenu-main">
			<div className="CardMenu-content">
				<ItemCardMenu
					title={"Promociones Exclusivas Web"}
					imageUrl={urlBanner1}
				/>
				<ItemCardMenu title={"Combos"} imageUrl={urlBanner2} />
				<ItemCardMenu title={"Hamburguesas"} imageUrl={urlBanner3} />
				<ItemCardMenu title={"Pollo"} imageUrl={urlBanner4} />
				<ItemCardMenu title={"Loncheritas"} imageUrl={urlBanner5} />
				<ItemCardMenu title={"Complementos"} imageUrl={urlBanner6} />
				<ItemCardMenu title={"Bebidas"} imageUrl={urlBanner7} />
				<ItemCardMenu title={"Helados"} imageUrl={urlBanner8} />
				<ItemCardMenu title={"Inka Chips"} imageUrl={urlBanner9} />

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
	);
}
