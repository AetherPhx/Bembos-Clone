import { Link } from "react-router-dom";
import "./SecondNav.css";

export const SecondNav = () => {
	return (
		<div className="menu-button container">
			<div className="menu-button-categorias">
				<ul className="categorias  buttons-group">
					<div className="categorias-link">
						<li>
							<Link to={"/menu/combos"}>Combos</Link>
						</li>
					</div>
					<div className="categorias-link">
						<li>
							<Link to={"/menu/hamburguesas"}>Hamburguesas</Link>
						</li>
					</div>
					<div className="categorias-link">
						<li>
							<Link to={"/menu/pollo"}>Pollo</Link>
						</li>
					</div>
					<div className="categorias-link">
						<li>
							<Link to={"/menu/loncheritas"}>Loncheritas</Link>
						</li>
					</div>
					<div className="categorias-link">
						<li>
							<Link to={"/menu/complementos"}>Complementos</Link>
						</li>
					</div>
					<div className="categorias-link">
						<li>
							<Link to={"/menu/bebidas"}>Bebidas</Link>
						</li>
					</div>
					<div className="categorias-link">
						<li>
							<Link to={"/menu/helados"}>Helados</Link>
						</li>
					</div>
					<div className="categorias-link">
						<li>
							<Link to={"/menu/inka-chips"}>Inka Chips</Link>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
};
