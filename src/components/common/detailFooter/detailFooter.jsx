import "./detailFooter.css";

export const DetailFooter = () => {
	return (
		<div className="Detail-footer">
			<div className="Detail-footer-contenedor contenedor">
				<div className="Detail-footer-left">
					<p className="Detail-p">Cantidad</p>
					<button className="Detail-btn Detail-p">-</button>
					<p className="Detail-cant Detail-btn Detail-p">1</p>
					<button className="Detail-btn Detail-p">+</button>
				</div>
				<div className="Detail-footer-right">
					<p className="Detail-pts">Acumulas 0Pts</p>
					<div className="Detail-footer-right-btn">
						<button className="Detail-btn-send ">Agregar s/. 35.80</button>
					</div>
				</div>
			</div>
		</div>
	);
};
