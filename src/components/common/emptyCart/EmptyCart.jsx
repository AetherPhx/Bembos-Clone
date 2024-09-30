import './EmptyCart.css';

export const EmptyCart=()=>{
    return(

        <div className="carrito">
        <div className="carrito-title">
            <div className="button-close">x</div>
        </div>
        <div className="carrito-card">
            <div className="contenedor-vacio">
            <div className="contenedor-vacio-padding">
                <div className="carrito-vacio">
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4My44MDMiIGhlaWdodD0iNTYuNDk0IiB2aWV3Qm94PSIwIDAgODMuODAzIDU2LjQ5NCI+PHBhdGggZD0iTTE4LjA2NCw1NS40OTRhNy41NDIsNy41NDIsMCwwLDEtNy4yNDctNi4xNjFMNS42OTUsMTkuMTkzYTYuMzI2LDYuMzI2LDAsMCwxLS4wODctMS4wMTVBNi43MjUsNi43MjUsMCwwLDEsMCwxMS41NDJ2LTQuOEE2LjczMiw2LjczMiwwLDAsMSw2LjcsMEg3Ni4xMTRBNi43MjYsNi43MjYsMCwwLDEsODIuOCw2Ljc0NXY0LjhhNi43MjcsNi43MjcsMCwwLDEtNS42LDYuNjM2LDUuODgzLDUuODgzLDAsMCwxLS4wOTMsMS4wMTVsLTUuMTIzLDMwLjE0YTcuNTQyLDcuNTQyLDAsMCwxLTcuMjQ4LDYuMTYxWk0xNyw0OC4yNjlhMS4yODgsMS4yODgsMCwwLDAsMS4wNjEuOTA2SDY0LjczOGExLjMsMS4zLDAsMCwwLDEuMDY3LS45MDZsNS4xLTI5Ljk3Ny01OS0uMDA1Wk02LjI3NCw2Ljc0NXY0LjhhLjQzNC40MzQsMCwwLDAsLjQyMi40MjZINzYuMTE0YS40MjkuNDI5LDAsMCwwLC40MTYtLjQyNnYtNC44YS40MzQuNDM0LDAsMCwwLS40MTYtLjQyNkg2LjdBLjQzOS40MzksMCwwLDAsNi4yNzQsNi43NDVaTTUyLjA2NSw0MS4wODJ2LTE1LjVhMy4xMzgsMy4xMzgsMCwxLDEsNi4yNzYsMHYxNS41YTMuMTM4LDMuMTM4LDAsMSwxLTYuMjc2LDBabS0xMy44LDB2LTE1LjVhMy4xMzcsMy4xMzcsMCwxLDEsNi4yNzMsMHYxNS41YTMuMTM3LDMuMTM3LDAsMSwxLTYuMjczLDBabS0xMy44LDB2LTE1LjVhMy4xMzcsMy4xMzcsMCwxLDEsNi4yNzQsMHYxNS41YTMuMTM3LDMuMTM3LDAsMSwxLTYuMjc0LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUgMC41KSIgZmlsbD0iI2UxMGIxOSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDApIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4="
                    alt="Carrito vacío"
                />
                </div>
                <h3 className='carrito-vacio-title'>Tu canasta está vacía</h3>
                <p className='carrito-vacio-text'>Te invitamos a volver a nuestras tiendas y agregar productos a tu canasta</p>
            </div>
            </div>
        </div>
        </div>

    )
}