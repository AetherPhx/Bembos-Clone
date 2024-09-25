import "./bannerCard.css";

export const BannerCard = ({ url }) => {
	return (
		<article className="BannerCard">
			<img className="BannerCard-image" src={url} alt="Imagen" />
		</article>
	);
};
