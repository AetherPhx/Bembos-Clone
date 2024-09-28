<<<<<<< HEAD
import './Cart.css';

export const Cart=()=>{
    return(

<div className="carrito">
      <div className="carrito-title">
        <p className="carrito-title-title">Tu carrito</p>
        <p className="carrito-title-subtitle">
          ¿Cuentas con cupones de Dscto? <span>ingrésalos en el siguiente paso</span>
        </p>
      </div>
      <div className="carrito-listProducts">
        {/* Primer producto */}
        <div className="carrito-card">
          <div className="carrito-card-producto">
            <div className="carrito-card-description">
              <div className="carrito-card-description-name">
                <div className="carrito-card-description-img">
                  <img src="img.jpg" alt="Producto" />
                </div>
                <div className="carrito-card-description-title">
                  <p>Hamburguesa Taypa</p>
                  <p>s/32.00</p>
                </div>
              </div>
              <div className="carrito-card-description-button">
                <div className="carrito-card-button-eliminar">
                  <img src="https://www.bembos.com.pe/_nuxt/img/delete.b647968.svg" alt="Eliminar" />
                  <p className="leer-mas">Leer más</p>
                </div>
                <div className="button-controls">
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segundo producto (idéntico al anterior) */}
        <div className="carrito-card">
          <div className="carrito-card-producto">
            <div className="carrito-card-description">
              <div className="carrito-card-description-name">
                <div className="carrito-card-description-img">
                  <img src="img.jpg" alt="Producto" />
                </div>
                <div className="carrito-card-description-title">
                  <p>Hamburguesa Taypa</p>
                  <p>s/32.00</p>
                </div>
              </div>
              <div className="carrito-card-description-button">
                <div className="carrito-card-button-eliminar">
                  <img src="https://www.bembos.com.pe/_nuxt/img/delete.b647968.svg" alt="Eliminar" />
                  <p className="leer-mas">Leer más</p>
                </div>
                <div className="button-controls">
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtotal */}
        <div className="carrito-subtotal">
          <div className="carrito-card subtotal">
            <table>
              <thead>
                <tr>
                  <th className="th-text"></th>
                  <th className="th-precio"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>s/50.70</td>
                </tr>
                <tr>
                  <td>Delivery</td>
                  <td>s/6.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Total */}
        <div className="carrito-subtotal">
          <div className="carrito-card total">
            <table>
              <tbody>
                <tr>
                  <td>Total</td>
                  <td>s/50.70</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="carrito-card">
          <div className="carrito-card-button">
            <button className="carrito-card-button-pagar">
              <p className="button-contador">2</p>
              <p>Ir a pagar</p>
              <p className="button-precio">s/52.10</p>
            </button>
            <button className="carrito-card-button-seguir">Seguir comprando</button>
          </div>
        </div>
      </div>
    </div>
  
    

    )
}
=======
import "./Cart.css";

export const Cart = () => {
	return (
		<div className="carrito">
			<div className="carrito-title">
				<p className="carrito-title-title">Tu carrito</p>
				<p className="carrito-title-subtitle">
					¿Cuentas con cupones de Dscto?{" "}
					<span>ingrésalos en el siguiente paso</span>
				</p>
			</div>
			<div className="carrito-listProducts">
				{/* Primer producto */}
				<div className="carrito-card">
					<div className="carrito-card-producto">
						<div className="carrito-card-description">
							<div className="carrito-card-description-name">
								<div className="carrito-card-description-img">
									<img src="img.jpg" alt="Producto" />
								</div>
								<div className="carrito-card-description-title">
									<p>Hamburguesa Taypa</p>
									<p>s/32.00</p>
								</div>
							</div>
							<div className="carrito-card-description-button">
								<div className="carrito-card-button-eliminar">
									<img
										src="https://www.bembos.com.pe/_nuxt/img/delete.b647968.svg"
										alt="Eliminar"
									/>
									<p className="leer-mas">Leer más</p>
								</div>
								<div className="button-controls">
									<div>-</div>
									<div>1</div>
									<div>+</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Segundo producto (idéntico al anterior) */}
				<div className="carrito-card">
					<div className="carrito-card-producto">
						<div className="carrito-card-description">
							<div className="carrito-card-description-name">
								<div className="carrito-card-description-img">
									<img src="img.jpg" alt="Producto" />
								</div>
								<div className="carrito-card-description-title">
									<p>Hamburguesa Taypa</p>
									<p>s/32.00</p>
								</div>
							</div>
							<div className="carrito-card-description-button">
								<div className="carrito-card-button-eliminar">
									<img
										src="https://www.bembos.com.pe/_nuxt/img/delete.b647968.svg"
										alt="Eliminar"
									/>
									<p className="leer-mas">Leer más</p>
								</div>
								<div className="button-controls">
									<div>-</div>
									<div>1</div>
									<div>+</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Subtotal */}
				<div className="carrito-subtotal">
					<div className="carrito-card subtotal">
						<table>
							<thead>
								<tr>
									<th className="th-text"></th>
									<th className="th-precio"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Subtotal</td>
									<td>s/50.70</td>
								</tr>
								<tr>
									<td>Delivery</td>
									<td>s/6.50</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Total */}
				<div className="carrito-subtotal">
					<div className="carrito-card total">
						<table>
							<tbody>
								<tr>
									<td>Total</td>
									<td>s/50.70</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Botones de acción */}
				<div className="carrito-card">
					<div className="carrito-card-button">
						<button className="carrito-card-button-pagar">
							<p className="button-contador">2</p>
							<p>Ir a pagar</p>
							<p className="button-precio">s/52.10</p>
						</button>
						<button className="carrito-card-button-seguir">
							Seguir comprando
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
>>>>>>> c9a6c151f94272c738f208fc07d7265a9ed0ebd7
