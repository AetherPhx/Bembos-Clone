import { Cart, Category, ClasicaBembos, Home, Menu, Test } from "./pages";

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
		path: "/menu/:category",
		component: <Category />,
	},
	{
		path: "/menu/hamburguesas/hamburguesa-clasica-bembos",
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
