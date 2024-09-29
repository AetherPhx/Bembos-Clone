import React from "react";
export { Home } from "./home";

export const Menu = React.lazy(() => import("./menu/Menu"));
export const Category = React.lazy(() => import("./category/Category"));
export const Product = React.lazy(() => import("./product/Product"));

export const Cart = React.lazy(() =>
	import("/src/components/common/cart/Cart")
);
export const Test = React.lazy(() => import("./test/Test"));
