import { NavLink } from "react-router-dom";
import "./secondNav.css";
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
		<div className={`SecondNav ${isScrolled ? "SecondNav-scrolled" : ""}`}>
			<nav className="SecondNav-nav">
				<ul className="SecondNav-list">
					<NavLink
						to={"/menu/combos"}
						className={({ isActive }) =>
							`SecondNav-item ${isActive ? "SecondNav-item-active" : ""}`
						}
					>
						<span className="SecondNav-link">Combos</span>
					</NavLink>

					<NavLink
						to={"/menu/hamburguesas"}
						className={({ isActive }) =>
							`SecondNav-item ${isActive ? "SecondNav-item-active" : ""}`
						}
					>
						<span className="SecondNav-link">Hamburguesas</span>
					</NavLink>

					<NavLink
						to={"/menu/pollo"}
						className={({ isActive }) =>
							`SecondNav-item ${isActive ? "SecondNav-item-active" : ""}`
						}
					>
						<span className="SecondNav-link">Pollo</span>
					</NavLink>

					<NavLink
						to={"/menu/loncheritas"}
						className={({ isActive }) =>
							`SecondNav-item ${isActive ? "SecondNav-item-active" : ""}`
						}
					>
						<span className="SecondNav-link">Loncheritas</span>
					</NavLink>
					<NavLink
						to={"/menu/complementos"}
						className={({ isActive }) =>
							`SecondNav-item ${isActive ? "SecondNav-item-active" : ""}`
						}
					>
						<span className="SecondNav-link">Complementos</span>
					</NavLink>
					<NavLink
						to={"/menu/bebidas"}
						className={({ isActive }) =>
							`SecondNav-item ${isActive ? "SecondNav-item-active" : ""}`
						}
					>
						<span className="SecondNav-link">Bebidas</span>
					</NavLink>
					<NavLink
						to={"/menu/helados"}
						className={({ isActive }) =>
							`SecondNav-item ${isActive ? "SecondNav-item-active" : ""}`
						}
					>
						<span className="SecondNav-link">Helados</span>
					</NavLink>
					<NavLink
						to={"/menu/inka-chips"}
						className={({ isActive }) =>
							`SecondNav-item ${isActive ? "SecondNav-item-active" : ""}`
						}
					>
						<span className="SecondNav-link">Inka Chips</span>
					</NavLink>
				</ul>
			</nav>
		</div>
	);
};
