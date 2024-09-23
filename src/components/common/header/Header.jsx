import { NavMain } from "./navMain";

export const Header = () => {
	// TODO: Maquetar Barras de "Horario de Atención" e "Info General"
	// TODO: Maquetar Barra contenedora de "Navegación Principal" y del "Carrito"
	// TODO: Maquetar Botón "Pide en tiendas" e Ícono de Carrito

	return (
		<header>
			<section>Horario de Atención</section>

			<section>Información General</section>

			<section>
				<NavMain />

				<div>Pide en Tienda y Carrito</div>
			</section>
		</header>
	);
};
