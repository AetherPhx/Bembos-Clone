import { NavLink } from "react-router-dom";

import menuImg01 from "/src/assets/navMain/bmb-menu.svg";
import menuImg02 from "/src/assets/navMain/bmb-combo.svg";
import menuImg03 from "/src/assets/navMain/bmb-promociones.svg";
import menuImg04 from "/src/assets/navMain/bmb-hamburguesa.svg";
import menuImg05 from "/src/assets/navMain/bmb-beneficios.svg";

export const NavMain = () => {
	return (
		<nav>
			<ul className="Menu-item">
				<NavLink
					to="/menu"
					end
					className={({ isActive }) =>
						`Menu-link Font-head ${isActive ? "Menu-link-active" : ""}`
					}
				>
					<img src={menuImg01} alt="img01" />
					MENÚ
				</NavLink>
				<NavLink
					to="/menu/combos"
					className={({ isActive }) =>
						`Menu-link Font-head ${isActive ? "Menu-link-active" : ""}`
					}
				>
					<img src={menuImg02} alt="img02" />
					COMBOS
				</NavLink>
				<NavLink
					to="/promociones"
					className={({ isActive }) =>
						`Menu-link Font-head ${isActive ? "Menu-link-active" : ""}`
					}
				>
					<img src={menuImg03} alt="img03" />
					PROMOCIONES
				</NavLink>
				<NavLink
					to="/menu/hamburguesas"
					className={({ isActive }) =>
						`Menu-link Font-head ${isActive ? "Menu-link-active" : ""}`
					}
				>
					<img src={menuImg04} alt="img04" />
					HAMBURGUESAS
				</NavLink>
				<NavLink
					to="/"
					className={({ isActive }) =>
						`Menu-link Font-head ${isActive ? "Menu-link-active" : ""}`
					}
				>
					<img src={menuImg05} alt="img05" />
					BENEFICIOS
				</NavLink>
			</ul>
		</nav>
	);
};
