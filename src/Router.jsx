import { Routes, Route } from "react-router-dom";
import { routes } from "./routerConfig";

export const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} element={route.component} />
			))}
		</Routes>
	);
};

/*

	const location = useLocation();
	const isCartPage = location.pathname === "/cart";


					<div
						className={`app-container ${
							isCartPage ? "cart-overlay-active" : ""
						}`}
					>
						{isCartPage && <Cart />}
					</div>

 */
