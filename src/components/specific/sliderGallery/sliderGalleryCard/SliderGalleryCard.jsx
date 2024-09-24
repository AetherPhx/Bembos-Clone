import "./sliderGalleryCard.css";
export const SliderGalleryCard = () => {
	// TODO: Agregar los siguientes props:
	// 	imageUrl, name, discountPercent, currentPrice, originalPrice

	return (
		<article className="SliderGalleryCard">
			<div className="SliderGalleryCard-imageWrapper">
				<img
					className="SliderGalleryCard-image"
					src="https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/promociones-bembos-delivery.webp"
					alt="Imagen"
				/>
			</div>
			<h3 className="SliderGalleryCard-title">Titulo</h3>
			<button className="SliderGalleryCard-button">Texto de Botón</button>
		</article>
	);
};
