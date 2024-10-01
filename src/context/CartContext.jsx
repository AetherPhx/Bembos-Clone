const item = {
	// Properties
			id:"1",
			nombre: "familiar1",
			precioTotal:0.0,
			cantidad:1,
			precioUnitario:49.9,
			detalles:"4 royal regulares + 4 papas medianas",
			imagen:"",


	// ! Agrega todas las propiedades

	// Methods
	increase() {
		// Lógica de la fn...
	},

	calculateTotal(){
		this.precioTotal=this.precioUnitario*this.cantidad;

	},
	reducir(){

	},
};

const cartData = {
	productList: [
		{
			id:"1",
			nombre: "familiar1",
			precioTotal:0,
			cantidad:1,
			precioUnitario:49.9,
			detalles:"4 royal regulares + 4 papas medianas",
			imagen:"",
			// Más propiedades
		},
		{
			id:"2",
			nombre: "Bembosboster clasica",
			precioTotal:0,
			cantidad:1,
			precioUnitario:12.9,
			detalles:"1 hamburguesa broster",
			imagen:"",
			// Más propiedades
		},
		{
			id:"3",
			nombre: "Bembosboster",
			precioTotal:0,
			cantidad:1,
			precioUnitario:15.9,
			detalles:"1 hamburguesa broster",
			imagen:"",
			// Más propiedades
		},

		// Más productos
	],

//calcular el total

	calcTotal: () => {
		let totalcarrito=0;

		cartData.productList.forEach(product =>{
			product.precioTotal=product.cantidad * product.precioUnitario;
			totalcarrito+=product.precioTotal;
		})
			return totalcarrito;
	},
	//const total=calcularTotal();
	//console.log("total",total);

//eliminar un item
	eliminarProducto: (id) => {
		cartData.productList = cartData.productList.filter(product => product.id !== id);	

	},
	// Eliminar el producto con id "2"
	//eliminarProducto("2");
	//console.log(cartData.productList);


};


