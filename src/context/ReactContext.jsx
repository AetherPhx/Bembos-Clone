import { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		setUser({
			nombre: "Juan",
			apellido: "Perez",
		});
	}, []);

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
		<DataContext.Provider value={{ user, cambiarUsuario }}>
			{children}
		</DataContext.Provider>
	);
};
