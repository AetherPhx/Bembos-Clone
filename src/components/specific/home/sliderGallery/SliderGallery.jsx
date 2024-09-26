import { CardSimple } from "./cardSimple";
import { CardPromo } from "./cardPromo";
import "./sliderGallery.css";

export const SliderGallery = ({ title, data, cardType }) => {
	return (
		<section className="SliderGallery">
			<header className="SliderGallery-header">
				<h2 className="Font-title SliderGallery-title">{title}</h2>

				<nav className="SliderGallery-nav">
					<button className="SliderGallery-button">
						<svg
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 492 492"
							width="20"
							height="30"
							xmlSpace="preserve"
						>
							<g>
								<g>
									<path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"></path>
								</g>
							</g>
						</svg>
					</button>

					<button className="SliderGallery-button">
						<svg
							data-v-4c398662=""
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 451.846 451.847"
							width="20"
							height="30"
							xmlSpace="preserve"
						>
							<g>
								<path
									d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
								></path>
							</g>
						</svg>
					</button>
				</nav>
			</header>

			<div className="SliderGallery-deck">
				{data.map((item) => {
					if (cardType === "Promo") {
						return (
							<CardPromo
								key={item.id}
								imageUrl={item.img}
								name={item.nombre}
								discountPercentage={item.descuento}
								previousPrice={item.precio_antiguo}
								currentPrice={item.precio_actual}
								btnText="Ver más"
							/>
						);
					} else if (cardType === "Simple") {
						return (
							<CardSimple
								key={item.id}
								imageUrl={item.img}
								name={item.nombre}
								btnText="Ver todos"
							/>
						);
					}
				})}
			</div>
		</section>
	);
};
