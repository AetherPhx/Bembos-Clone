const item = {
	// Properties
	id: "1",
	nombre: "familiar1",
	precioTotal: 0.0,
	cantidad: 2,
	precioUnitario: 10.0,
	detalles: "4 royal regulares + 4 papas medianas",
	imagen: "",

	// Methods
	increase() {
		this.cantidad += 1;
	},

	reduce() {
		if (this.cantidad > 1) {
			this.cantidad -= 1;
		}
	},

	calculateTotal() {
		this.precioTotal = this.precioUnitario * this.cantidad;
	},
};

const cartData = {
	total: 0,

	productList: [
		{
			id: "1",
			nombre: "familiar1",
			precioTotal: 0,
			cantidad: 1,
			precioUnitario: 49.9,
			detalles: "4 royal regulares + 4 papas medianas",
			imagen: "",
		},
		{
			id: "2",
			nombre: "Bembosboster clasica",
			precioTotal: 0,
			cantidad: 1,
			precioUnitario: 12.9,
			detalles: "1 hamburguesa broster",
			imagen: "",
		},
		{
			id: "3",
			nombre: "Bembosboster",
			precioTotal: 0,
			cantidad: 1,
			precioUnitario: 15.9,
			detalles: "1 hamburguesa broster",
			imagen: "",
		},
	],

	calcularTotal: () => {
		this.productList.forEach((product) => {
			product.calculateTotal;
			this.total += product.precioTotal;
		});
	},

	eliminarProducto: (id) => {
		cartData.productList = cartData.productList.filter(
			(product) => product.id !== id
		);
	},
};
