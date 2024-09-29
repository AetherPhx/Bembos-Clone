import "./detailFooter.css";

export const DetailFooter = () => {
	return (
		<div className="detail-footer">
			<div className="detail-footer-contenedor contenedor">
				<div className="detail-footer-left">
					<p className="detail-p">Cantidad</p>
					<button className="detail-btn detail-p">-</button>
					<p className="detail-cant detail-btn detail-p">1</p>
					<button className="detail-btn detail-p">+</button>
				</div>
				<div className="detail-footer-right">
					<p className="detail-pts">Acumulas 0Pts</p>
					<div className="detail-footer-right-btn">
						<button className="detail-btn-send ">Agregar s/. 35.80</button>
					</div>
				</div>
			</div>
		</div>
	);
};
