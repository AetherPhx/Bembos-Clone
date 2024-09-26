import { useData } from "/src/context/ReactContext";

export const Menu = () => {
	const {
		combos,
		hamburguesas,
		pollo,
		loncheritas,
		complementos,
		bebidas,
		helados,
		inkaChips,
		menu,
		promoOnline,
		promoPersonales,
		promoDos,
		promoCompartir,
		cupones,
		locales,
	} = useData();

	const mostrarCombos = () => {
		console.log(combos);
		console.log(hamburguesas);
		console.log(pollo);
		console.log(loncheritas);
		console.log(complementos);
		console.log(bebidas);
		console.log(helados);
		console.log(inkaChips);
		console.log(menu);
		console.log(promoOnline);
		console.log(promoPersonales);
		console.log(promoDos);
		console.log(promoCompartir);
		console.log(cupones);
		console.log(locales);
	};

	return (
		<>
			<button onClick={mostrarCombos}>Menu</button>
		</>
	);
};

export default Menu;
