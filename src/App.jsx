import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { AppRouter } from "./router";

export function App() {
	return (

		<>
			<Router>
				<Suspense fallback={<div>🍔 Cargando aplicación...</div>}>
					<AppRouter />
				</Suspense>
			</Router>
		</>

	
		
	);
}
