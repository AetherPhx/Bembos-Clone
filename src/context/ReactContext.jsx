import { createContext, useState, useContext } from "react";

const userContext = createContext();

export const ReactProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const cambiarUsuario = () => {
		if (user) {
			setUser(null);
		} else {
			setUser({
				nombre: "Luis",
				apellido: "Mendoza",
			});
		}
	};

	return (
		<userContext.Provider value={{ user, cambiarUsuario }}>
			{children}
		</userContext.Provider>
	);
};
