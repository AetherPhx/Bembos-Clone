import { Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routerConfig";
import { Cart } from "./pages/cart/Cart";

export const AppRouter = () => {
	const location = useLocation(); // Hook para obtener la ubicación
	const isCartPage = location.pathname === "/cart"; // Verificamos si la URL es /cart

	return (
		<div className={isCartPage ? "Cart-overlay-active" : ""}>
			<Routes location={isCartPage ? { pathname: "/" } : location}>
				{routes.map((route, index) => (
					<Route key={index} path={route.path} element={route.component} />
				))}
			</Routes>
			{isCartPage && <Cart />} {/* Mostramos el carrito si la URL es /cart */}
		</div>
	);
};
