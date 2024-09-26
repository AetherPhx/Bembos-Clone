import { useData } from "/src/context/ReactContext";

export const Menu = () => {
	const { user, cambiarUsuario } = useData();

	return (
		<>
			{user ? (
				<p>
					{user.nombre}, {user.apellido}
				</p>
			) : (
				<p>Anónimo</p>
			)}
			<button onClick={cambiarUsuario}>{user ? "Deslogear" : "Logear"}</button>
		</>
	);
};

export default Menu;
