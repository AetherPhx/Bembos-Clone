const item = {
	// Properties
	nombre: "",
	
	// ! Agrega todas las propiedades

	// Methods
	increase() {
        this.cantidad += 1;
    },
    reduce() {

        if (this.cantidad > 1) {
            this.cantidad -= 1;
        }
    }
};

const cartData = {
	productList: [
		{
			nombre: "",
			img: "",
			// Más propiedades
		},
		// Más productos
	],

	calcTotal: () => {
		// Lógica de la fn
		// ! Tiene que devolver el total
	},
};

