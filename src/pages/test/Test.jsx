import { useData } from "/src/context/ReactContext";

export const Test = () => {
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

	const mostrarData = () => {
		console.groupCollapsed("Información de Combos");
		console.log(combos);
		console.groupEnd();
		console.groupCollapsed("Información de Hamburguesas");
		console.log(hamburguesas);
		console.groupEnd();
		console.groupCollapsed("Información de Pollo");
		console.log(pollo);
		console.groupEnd();
		console.groupCollapsed("Información de Loncheritas");
		console.log(loncheritas);
		console.groupEnd();
		console.groupCollapsed("Información de Complementos");
		console.log(complementos);
		console.groupEnd();
		console.groupCollapsed("Información de Bebidas");
		console.log(bebidas);
		console.groupEnd();
		console.groupCollapsed("Información de Helados");
		console.log(helados);
		console.groupEnd();
		console.groupCollapsed("Información de Inka Chips");
		console.log(inkaChips);
		console.groupEnd();
		console.groupCollapsed("Información de Menu");
		console.log(menu);
		console.groupEnd();
		console.groupCollapsed("Información de Promociones Online");
		console.log(promoOnline);
		console.groupEnd();
		console.groupCollapsed("Información de Promociones Personales");
		console.log(promoPersonales);
		console.groupEnd();
		console.groupCollapsed("Información de Promociones Para Dos");
		console.log(promoDos);
		console.groupEnd();
		console.groupCollapsed("Información de Promociones Para Compartir");
		console.log(promoCompartir);
		console.groupEnd();
		console.groupCollapsed("Información de Cupones");
		console.log(cupones);
		console.groupEnd();
		console.groupCollapsed("Información de Locales");
		console.log(locales);
		console.groupEnd();
	};

	return (
		<>
			<button onClick={mostrarData}>Mostrar Información de DB</button>
		</>
	);
};

export default Test;
