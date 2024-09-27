import "./cardPromo.css";

export const CardPromo = ({
	imageUrl,
	name,
	discountPercentage,
	previousPrice,
	currentPrice,
	btnText,
}) => {
	return (
		<article className="CardPromo">
			<header className="CardPromo-header">
				<div className="Font-number-secondary CardPromo-header-discount">
					-{discountPercentage}%
				</div>
				<img
					className="CardPromo-header-fav"
					src="/src/assets/icons/heart-border.svg"
					alt="Heart"
				/>
			</header>

			<div className="CardPromo-imageWrapper">
				<img className="CardPromo-image" src={imageUrl} alt="Imagen" />
			</div>

			<div className="CardPromo-info">
				<h3 className="Font-title-middle CardPromo-title">{name}</h3>
				<div className="CardPromo-cost">
					<p>S/. {currentPrice}</p>
					<p>S/. {previousPrice}</p>
				</div>
				<button className="Font-button-primary CardPromo-button">
					{btnText}
				</button>
			</div>
		</article>
	);
};
