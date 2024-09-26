import React from "react";
export { Home } from "./home";

export const Menu = React.lazy(() => import("./menu/Menu"));
export const Test = React.lazy(() => import("./test/Test"));
