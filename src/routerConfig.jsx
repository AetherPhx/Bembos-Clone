import { Category, Product, Home, Menu, Test } from "./pages";

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
		path: "/menu/:category/:product",
		component: <Product />,
	},
	{
		path: "/test",
		component: <Test />,
	},
];
