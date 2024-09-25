import "./Footer.css";
import { SocialIcon } from "./SocialIcon/SocialIcon";

export function Footer() {
  const iconFBLink = "https://www.facebook.com/bembos/";
  const iconYTLink = "https://www.youtube.com/user/BembosCanal";
  const iconTWLink = "https://twitter.com/BembosOficial";
  const iconITLink = "https://www.instagram.com/bembosoficial/?hl=es-la";

  return (
    <footer className="container">
      <div className="Redes-sociales">
        <div className="Redes-sociales-icon">
          <SocialIcon link={iconFBLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92.384"
              height="92.371"
              viewBox="0 0 92.384 92.371"
            >
              <path
                d="M46.191 0a46.185 46.185 0 1 0 46.193 46.187A46.191 46.191 0 0 0 46.191 0zm14.608 26.456s-4.425-.024-6.22-.024c-3.525 0-3.284 1.372-3.284 5.709v3.215h9.5l-1.71 11.225h-7.793v30.175h-13.2V46.583h-6.5V35.356h6.5V26.32a10.678 10.678 0 0 1 3.992-8.123 13.4 13.4 0 0 1 8.043-2.58l10.672.018z"
                fill="#fff"
              ></path>
            </svg>
          </SocialIcon>
          <SocialIcon link={iconYTLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90.864"
              height="90.86"
              viewBox="0 0 90.864 90.86"
            >
              <path
                d="M45.43 0a45.43 45.43 0 1 0 45.435 45.434A45.432 45.432 0 0 0 45.43 0zm28.742 59.867a7.525 7.525 0 0 1-5.3 5.306c-4.675 1.248-23.436 1.248-23.436 1.248s-18.75 0-23.436-1.248a7.532 7.532 0 0 1-5.306-5.306c-1.248-4.675-1.248-14.437-1.248-14.437s0-9.762 1.248-14.437A7.528 7.528 0 0 1 22 25.687c4.686-1.25 23.436-1.25 23.436-1.25s18.761 0 23.436 1.25a7.522 7.522 0 0 1 5.3 5.306c1.25 4.675 1.25 14.438 1.25 14.438s-.004 9.761-1.25 14.436z"
                fill="#fff"
              ></path>
              <path d="m39.44 54.428 15.582-9-15.582-9z" fill="#fff"></path>
            </svg>
          </SocialIcon>

          <SocialIcon link={iconTWLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90.867"
              height="90.86"
              viewBox="0 0 90.867 90.86"
            >
              <path
                d="M45.437 0a45.43 45.43 0 1 0 45.43 45.434A45.435 45.435 0 0 0 45.437 0zm21.6 34.351c.015.482.027.954.027 1.438 0 14.725-11.2 31.712-31.709 31.712a31.5 31.5 0 0 1-17.081-5.007 22.405 22.405 0 0 0 16.5-4.618 11.159 11.159 0 0 1-10.413-7.731 11.356 11.356 0 0 0 2.1.2 11.112 11.112 0 0 0 2.929-.389 11.163 11.163 0 0 1-8.935-10.937v-.137a11.052 11.052 0 0 0 5.047 1.4 11.157 11.157 0 0 1-3.45-14.88 31.631 31.631 0 0 0 22.969 11.641 11.164 11.164 0 0 1 10.86-13.683 11.076 11.076 0 0 1 8.131 3.525 22.348 22.348 0 0 0 7.076-2.715 11.194 11.194 0 0 1-4.9 6.173 22.475 22.475 0 0 0 6.4-1.757 22.8 22.8 0 0 1-5.549 5.762z"
                fill="#fff"
              ></path>
            </svg>
          </SocialIcon>
          <SocialIcon link={iconITLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="89.047"
              height="89.047"
              viewBox="0 0 89.047 89.047"
            >
              <g fill="#fff">
                <path d="M44.525 35.67a8.854 8.854 0 1 0 8.853 8.855 8.863 8.863 0 0 0-8.853-8.855z"></path>
                <path d="M54.259 23.171H34.787a11.631 11.631 0 0 0-11.616 11.616v19.471a11.631 11.631 0 0 0 11.616 11.616h19.471a11.629 11.629 0 0 0 11.616-11.616V34.787a11.629 11.629 0 0 0-11.615-11.616zm-9.735 34.057a12.7 12.7 0 1 1 12.7-12.7 12.72 12.72 0 0 1-12.7 12.7zm14.084-23.484a3.307 3.307 0 1 1 3.308-3.306 3.308 3.308 0 0 1-3.308 3.306z"></path>
                <path d="M44.527 0A44.525 44.525 0 0 0 .002 44.525a44.524 44.524 0 0 0 44.525 44.522 44.522 44.522 0 0 0 44.52-44.522A44.523 44.523 0 0 0 44.527 0zm25.112 54.259a15.4 15.4 0 0 1-15.38 15.376H34.788a15.394 15.394 0 0 1-15.375-15.378V34.788a15.392 15.392 0 0 1 15.375-15.375h19.471a15.394 15.394 0 0 1 15.378 15.375z"></path>
              </g>
            </svg>
          </SocialIcon>
        </div>
      </div>
    
      
      
      
      
      <div className="Footer-container-news">
            
              <p>¿Quieres recibir promociones y noticias?</p>
              <div className="Footer-container-news-mail">
                <input placeholder="tu correo" />
                <button className="button-send">Enviar</button>
              </div>
              <div className="Footer-container-news-checkbox">
                <input type="checkbox" />
              </div>
        </div>




      <div className="Footer-container-main">
          <p>© 2019 Todos los derechos reservados</p>
        </div>

    </footer>
  );
}
