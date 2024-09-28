import { useData } from "/src/context/ReactContext";
import { Header } from "/src/components/common";
import { Link } from "react-router-dom";
import "./ClasicaBembos.css";
export const ClasicaBembos = () => {
	const { hamburguesas } = useData();
	const product = hamburguesas.find((ham) => ham.id === "11");

	return (
		<div className="Product">
			<Header />

			<div className="Product-content">
				<aside className="Product-aside">
					<ul className="Product-url">
						<Link className="Product-url-link" to="/">
							Inicio
						</Link>
						{">"}
						<Link className="Product-url-link" to="/menu">
							Menú
						</Link>
						{">"}
						<Link className="Product-url-link" to="/menu/hamburguesas">
							Hamburguesas
						</Link>
						{">"}
						<Link
							className="Product-url-link"
							to="/menu/hamburguesas/hamburguesa-clasica-bembos"
						>
							Hamburguesa Clasica Bembos
						</Link>
					</ul>
					<img className="Product-image" src={product.img} alt="Product" />
				</aside>

				<main className="Product-info">
					<h1 className="Product-name">Hamburguesa Clásica a la Parrilla</h1>
					<div className="Product-desc">
						<p>
							¿Ya probaste la deliciosa hamburguesa a la parrilla clásica
							Bembos? Con su delicioso sabor ahumado y consistencia
							característica, este clásico Bembos lleva como ingredientes:
						</p>
						<p>- Mayonesa - Tomate - Lechuga</p>
						<p>
							Agrega gratis: Mayonesa (01), Ají Bembos (01) y Kétchup (01).
							¡Pídela ya con delivery!
						</p>
					</div>
					<div className="Product-options">
						{/* Carruseles de opciones */}
						<p>Opcion 1</p>
						<p>Opcion 2</p>
						<p>Opcion 3</p>
					</div>
				</main>
			</div>
		</div>
	);
};

export default ClasicaBembos;
