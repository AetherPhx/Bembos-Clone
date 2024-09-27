import React from "react";
export { Home } from "./home";

export const Menu = React.lazy(() => import("./menu/Menu"));
// Categorías de Menú y sus Productos
export const Hamburguesas = React.lazy(() =>
	import("./hamburguesas/Hamburguesas")
);
export const ClasicaBembos = React.lazy(() =>
	import("./products/clasica-bembos/ClasicaBembos")
);

export const Cart = React.lazy(() =>
	import("/src/components/common/cart/Cart")
);
export const Test = React.lazy(() => import("./test/Test"));
