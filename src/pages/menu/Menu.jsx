import { useData } from "/src/context/ReactContext";

export const Menu = () => {
	const { mostrarProds } = useData();

	return (
		<>
			<button onClick={mostrarProds}>Mostrar</button>
		</>
	);
};

export default Menu;
