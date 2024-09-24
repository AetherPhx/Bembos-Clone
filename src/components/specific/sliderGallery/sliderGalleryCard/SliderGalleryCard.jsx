import "./sliderGalleryCard.css";
export const SliderGalleryCard = ({ imageUrl, name, btnText }) => {
	// discountPercent,
	// currentPrice,
	// originalPrice,

	return (
		<article className="SliderGalleryCard">
			<div className="SliderGalleryCard-imageWrapper">
				<img className="SliderGalleryCard-image" src={imageUrl} alt="Imagen" />
			</div>
			<div className="SliderGalleryCard-info">
				<h3 className="SliderGalleryCard-title">{name}</h3>
				<button className="SliderGalleryCard-button">{btnText}</button>
			</div>
		</article>
	);
};
