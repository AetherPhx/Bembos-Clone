import "./ProdItem.css";
export const ProdItem = ({ prod }) => {
	return (
		<article className="ProdItem">
			<header className="ProdItem-header">
				<img
					className="ProdItem-fav"
					src="/src/assets/icons/heart-border.svg"
					alt="Heart"
				/>
			</header>

			<div className="ProdItem-imageWrapper">
				<img className="ProdItem-image" src={prod.img} alt="Imagen" />
			</div>

			<div className="ProdItem-info">
				<h3 className="Font-title-middle ProdItem-title">{prod.nombre}</h3>

				<div className="ProdItem-info-content">
					<div className="ProdItem-details">
						<p className="Font-number-primary ProdItem-cost">
							S/. {prod.precio}
						</p>

						<p className="ProdItem-terms">Términos y condiciones</p>
					</div>

					<button className="Font-button-primary ProdItem-button">
						Ver más
					</button>
				</div>
			</div>
		</article>
	);
};
