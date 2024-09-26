import "./CardSimple.css";
export const CardSimple = ({ imageUrl, name, btnText }) => {
	return (
		<article className="SliderGalleryCard">
			<div className="SliderGalleryCard-imageWrapper">
				<img className="SliderGalleryCard-image" src={imageUrl} alt="Imagen" />
			</div>
			<div className="SliderGalleryCard-info">
				<h3 className="Font-title-middle SliderGalleryCard-title">{name}</h3>
				<button className="Font-button-primary SliderGalleryCard-button">
					{btnText}
				</button>
			</div>
		</article>
	);
};
