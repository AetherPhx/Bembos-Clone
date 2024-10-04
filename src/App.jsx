import { DataProvider, CartProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { AppRouter } from "./router";

export function App() {
	return (
		<DataProvider>
			<CartProvider>
				<Router>
					<Suspense fallback={<div>🍔 Cargando aplicación...</div>}>
						<AppRouter />
					</Suspense>
				</Router>
			</CartProvider>
		</DataProvider>
	);
}
