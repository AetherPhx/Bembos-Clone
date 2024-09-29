import { Link } from "react-router-dom";
import "./SecondNav.css";
import { useEffect, useState } from "react";

export const SecondNav = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			// Si el scroll es mayor a 50px, la barra de navegación crecerá
			if (offset > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`menu-button-container ${
				isScrolled ? "menu-button-container-scrolled" : ""
			}`}
		>
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
