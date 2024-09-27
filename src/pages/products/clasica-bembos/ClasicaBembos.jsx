import { Link } from "react-router-dom";

export const ClasicaBembos = () => {
	return (
		<main className="Product-main">
			<div className="Product-url">
				<ul className="Product-url-list">
					<Link to="/">Inicio</Link>
					{">"}
					<Link to="/menu">Menú</Link>
					{">"}
					<Link to="/menu/hamburguesas">Hamburguesas</Link>
					{">"}
					<Link to="/menu/hamburguesas/clasica-bembos">Clasica Bembos</Link>
				</ul>
			</div>
			<section className="Product"></section>
		</main>
	);
};

export default ClasicaBembos;
