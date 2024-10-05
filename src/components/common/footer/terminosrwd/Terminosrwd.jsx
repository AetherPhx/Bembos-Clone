import "./Terminosrwd.css";
import { useState } from "react";

export const Terminosrwd = () => {

  const [MapaOpen, setMapaOpen] = useState(false);
  const [TerminosOpen, setTerminosOpen] = useState(false);


  const toggleMapa = () => setMapaOpen(!MapaOpen);
  const toggleTerminos = () => setTerminosOpen(!TerminosOpen);

  return (
    <div className="Terminosrwd-main">

      <div className="Terminosrwd-item">
        <div className="Terminosrwd-title" onClick={toggleMapa}>
          MAPA DEL SITIO
        </div>
        {MapaOpen && (
          <ul className="Terminosrwd-content">
            <li><a href="#">Locales</a></li>
            <li><a href="#">Zonas de Reparto</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Mapa de sitio</a></li>
          </ul>
        )}
      </div>

        <div className="Terminosrwd-title" onClick={toggleTerminos}>
          TÉRMINOS Y CONDICIONES
        </div>
        {TerminosOpen && (
          <ul className="Terminosrwd-content">
            <li><a href="#">Políticas de Datos Personales</a></li>
            <li><a href="#">Términos y condiciones de Promociones</a></li>
            <li><a href="#">Derechos ARCO</a></li>
          </ul>
        )}
 
    </div>
  );
};
