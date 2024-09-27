import { Cart, ClasicaBembos, Hamburguesas, Home, Menu, Test } from "./pages";

export const routes = [
	{
		path: "/",
		component: <Home />,
	},
	{
		path: "/home",
		component: <Home />,
	},
	{
		path: "/menu",
		component: <Menu />,
	},
	{
		path: "/menu/hamburguesas",
		component: <Hamburguesas />,
	},
	{
		path: "/menu/hamburguesas/clasica-bembos",
		component: <ClasicaBembos />,
	},
	{
		path: "/cart",
		component: <Cart />,
	},
	{
		path: "/test",
		component: <Test />,
	},
];
