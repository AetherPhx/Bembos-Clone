import { Cart, Hamburguesas, Home, Menu, Test } from "./pages";

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
		path: "/cart",
		component: <Cart />,
	},
	{
		path: "/test",
		component: <Test />,
	},
];
