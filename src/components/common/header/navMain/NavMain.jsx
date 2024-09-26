import menuImg01 from '../images/bmb-menu.svg';
import menuImg02 from '../images/bmb-combo.svg';
import menuImg03 from '../images/bmb-promociones.svg';
import menuImg04 from '../images/bmb-hamburguesa.svg';
import menuImg05 from '../images/bmb-beneficios.svg';

export const NavMain = () => {
	return (

		<nav>
			<ul className="Menu-item">
				<li>
					<a href="#" className="Menu-link Font-head Menu-hover"><img src={menuImg01} alt="img01" />MENÚ</a>
				</li>
				<li>
					<a href="#" className="Menu-link Font-head Menu-hover"><img src={menuImg02} alt="img02" />COMBOS</a>
				</li>
				<li>
					<a href="#" className="Menu-link Font-head Menu-hover"><img src={menuImg03} alt="img03" />PROMOCIONES</a>
				</li>
				<li>
					<a href="#" className="Menu-link Font-head Menu-hover"><img src={menuImg04} alt="img04" />HAMBURGUESAS</a>
				</li>
				<li>
					<a href="#" className="Menu-link Font-head Menu-hover"><img src={menuImg05} alt="img05" />BENEFICIOS</a>
				</li>

			</ul>
		</nav>

	);
};
