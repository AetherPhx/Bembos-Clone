import { NavMain } from "./navMain";
import { Link } from "react-router-dom";
import { useCart } from "/src/context/CartContext";
import "./Header.css";
import menuImg06 from "/src/assets/navMain/bmb-phone.svg";
import menuImg07 from "/src/assets/navMain/bmb-user.svg";
import menuImg08 from "/src/assets/navMain/bmb-delivery.jpg";
import { SecondNav } from "../secondNav";
import { useMediaQuery } from "react-responsive";
import { FiMenu } from "react-icons/fi";

export const Header = ({ hasSecondNav }) => {
	const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
	const { cart } = useCart();
	const openLeftMenu = () => {
		console.log("Se abrió el menu lateral de la izq");
	};
	return (
		<header className="Header">
			<div className="MenuContainer-main">
				<div className="Menu-publi-delivery">
					<img src={menuImg08} alt="img08" />
				</div>

				<div className="Menu-main-header">
					<div className="Menu-publi">
						<Link to="/" className="Menu-logo">
							<svg
								data-v-36556a9b=""
								xmlns="http://www.w3.org/2000/svg"
								width={isMobile ? "94" : "133.582"}
								height={isMobile ? "80" : "46.489"}
								viewBox="0 0 133.582 46.489"
							>
								<path
									d="M88.573.003a105.669 105.669 0 0 1-.973 4.67c-1.458.015-25.658 2.239-29.27 2.489.208-1.548.64-3.056.929-4.59C62.184 2.258 81.731.554 88.573.003z"
									fill="#e10b19"
								></path>
								<path
									d="M121.792 7.239a12.167 12.167 0 0 1 7.79-2.557 27.7 27.7 0 0 1 4 .131c-.307 1.9-.765 3.77-1.149 5.654-.127.572-.235 1.15-.407 1.712a5.371 5.371 0 0 0-4.231-.47 2.95 2.95 0 0 0-2.024 2.125 1.806 1.806 0 0 0 .307 1.7c.915 1.109 2.31 1.657 3.3 2.687a6.15 6.15 0 0 1 2.013 4.647 11.361 11.361 0 0 1-1.736 6.635 10.883 10.883 0 0 1-6.709 4.308 17.617 17.617 0 0 1-8.005.083c.524-2.366.993-4.742 1.515-7.108a8.879 8.879 0 0 0 4.188.105 2.705 2.705 0 0 0 1.85-3.106c-.44-1.092-1.513-1.712-2.375-2.436a14.332 14.332 0 0 1-2.06-2.042 21.117 21.117 0 0 1-8.836 13.148 19.536 19.536 0 0 1-8.11 3.448 12.08 12.08 0 0 1-8.356-1.441 9.619 9.619 0 0 1-4.045-5.3 12.967 12.967 0 0 1-9.636 7.792c-1.914.359-3.87.4-5.8.614-3.756.3-7.507.653-11.262.958-.445-3.6-.931-7.2-1.356-10.807-1.723 1.917-6.112 7.287-6.661 7.988-.446-.617-3.19-5.7-4.268-7.538-.049.008-3.709 7.941-5.428 11.913-3.878.385-20.186 1.831-24.462 2.123.346-1.892.851-3.757 1.116-5.663a13.088 13.088 0 0 1-7.3 5.835 16.323 16.323 0 0 1-4.185.767c-3.157.25-6.308.594-9.468.785.562-3.177 5.631-26.772 5.877-27.685 1.515-.155 3.036-.246 4.551-.4 2.512-.171 5.086-.656 7.569.008a4.953 4.953 0 0 1 3.5 2.65 7.064 7.064 0 0 1 .391 3.5 6.551 6.551 0 0 1-3.924 5.2 5.108 5.108 0 0 1 2.992 1.524 5.616 5.616 0 0 1 1.12 2.841c1.232-5.676 2.392-11.369 3.638-17.042 5.147-.477 17.247-1.546 18.152-1.564-.431 2.436-1.059 4.835-1.483 7.271-.442.11-7.68.71-10.847.984a30.485 30.485 0 0 0-.709 3.458c2.871-.241 5.737-.554 8.611-.748-.352 1.909-1.244 6.106-1.46 6.106-2.833.307-5.678.484-8.515.758-.2 1.139-.488 2.261-.676 3.4 3.568-.265 7.131-.6 10.7-.9.205-.008.248-.259.345-.4 2.335-5.362 4.708-10.708 7.033-16.074.7-1.505 1.309-3.052 2.034-4.544 1.809 3.288 5.8 10.528 6 10.848 3.2-3.775 10.006-12.216 10.444-12.4 1.029 6.628 2.145 13.245 3.191 19.87.1-.184 2.992-13.666 4.379-20.205 2.566-.238 5.136-.445 7.7-.685a10.866 10.866 0 0 1 6.138.968 4.382 4.382 0 0 1 2.148 3.078 7.493 7.493 0 0 1-.794 4.863 5.941 5.941 0 0 1-3.159 2.715 6.63 6.63 0 0 1 2.022.677 6.348 6.348 0 0 1 1.451 1.3 20.407 20.407 0 0 1 6.764-11.462 21.414 21.414 0 0 1 7.362-4.355 14.676 14.676 0 0 1 7.694-.641 9.891 9.891 0 0 1 6.236 4.047 10.511 10.511 0 0 1 1.193 2.425 13.364 13.364 0 0 1 4.122-6.076zm-17.945 7.034a10.72 10.72 0 0 0-7.6 7.183 6.229 6.229 0 0 0 .268 4.524 4.734 4.734 0 0 0 3.232 2.459 7.716 7.716 0 0 0 5.142-.9 11.756 11.756 0 0 0 3.922-3.485 8.079 8.079 0 0 0 1.612-5.743 4.774 4.774 0 0 0-3.189-3.907 6.281 6.281 0 0 0-3.387-.131zM78.86 15.921c-.324 1.424-.658 2.849-.885 4.294a5.787 5.787 0 0 0 3.475-.862 2.867 2.867 0 0 0 .98-2.8 1.48 1.48 0 0 0-1.21-.758 11.12 11.12 0 0 0-2.364.126zm-67.077 5.862c-.248 1.446-.647 2.862-.894 4.309a7.323 7.323 0 0 0 3.041-.574 3.032 3.032 0 0 0 1.517-2.507 1.249 1.249 0 0 0-1-1.308 9.25 9.25 0 0 0-2.668.08zm64.89 4.573c-.391 1.633-.769 3.274-1.07 4.926a8.812 8.812 0 0 0 3.252-.552 3.515 3.515 0 0 0 1.912-2.875 1.43 1.43 0 0 0-.969-1.5 8.619 8.619 0 0 0-3.129 0zM9.558 32.281a108.228 108.228 0 0 0-.995 4.87 13.929 13.929 0 0 0 2.687-.336 3.34 3.34 0 0 0 2.335-3.868c-.416-.834-1.483-.934-2.309-.875a8.7 8.7 0 0 0-1.721.209z"
									fill={isMobile ? "#21388b" : "#fff"}
								></path>
								<path
									d="M113.753 39.451a2.741 2.741 0 0 1-.151 1.276c-.278 1.075-.435 2.174-.677 3.256-.939.249-28.548 2.491-29.355 2.506.158-1.517.6-2.987.9-4.48 1.582-.231 27.755-2.591 29.283-2.558z"
									fill="#fbb905"
								></path>
							</svg>
						</Link>

						{!isMobile && (
							<div className="Menu-publi-right">
								<div className="Icon-phone">
									<div>
										<img src={menuImg06} alt="img06" />
									</div>

									<div className="Head-delivery">
										<div>
											<span>delivery</span>
											<select>
												<option value="LIMA">LIMA</option>
											</select>
										</div>
										<div>
											<p>014191919</p>
										</div>
									</div>
								</div>

								<div className="Icon-user">
									<img src={menuImg07} alt="img07" />
									<p>Ingresar o crear tu cuenta</p>
								</div>
							</div>
						)}

						{isMobile && (
							<>
								<button className="Button-sin-colas">
									<svg
										data-v-1a0fdd4b=""
										xmlns="http://www.w3.org/2000/svg"
										width="41"
										height="25"
										viewBox="0 0 99.754 86.587"
									>
										<g transform="translate(-2037.468 -736.948)">
											<path
												d="M2079.685,757.479h-32.918a1.647,1.647,0,0,0-1.645,1.647v23.041a1.647,1.647,0,0,0,1.645,1.647h32.918a1.647,1.647,0,0,0,1.647-1.647V759.126A1.647,1.647,0,0,0,2079.685,757.479Zm-1.645,23.044h-29.625V760.771h29.625Z"
												transform="translate(9.305 26.054)"
												fill="#21388b"
												stroke="#21388b"
												strokeWidth="1"
											></path>{" "}
											<path
												d="M2136.706,755.481a1.578,1.578,0,0,0-.193-.688c-.016-.028-.009-.06-.025-.087l-9.874-16.459a1.653,1.653,0,0,0-1.413-.8H2049.49a1.65,1.65,0,0,0-1.413.8l-9.875,16.459c-.016.028-.011.06-.025.087a1.623,1.623,0,0,0-.2.688c0,.021-.012.039-.012.06l0,.012v3.292c0,7.022,4.139,12.739,9.875,14.347v48.2a1.647,1.647,0,0,0,1.647,1.647H2125.2a1.645,1.645,0,0,0,1.645-1.647v-48.7c5.572-2.181,9.876-7.792,9.876-13.841v-3.292l0-.012A.524.524,0,0,0,2136.706,755.481Zm-4.537-1.574h-18.911l-3.95-13.167h14.961ZM2110.389,768.2c-2.524,3.757-6.09,5.459-11.522,5.459-4.868,0-9.014-1.452-11.522-3.975V757.2h23.044Zm-46.087-11h19.751v12.5c-2.6,2.752-5.588,3.955-9.874,3.955-4.866,0-7.155-1.254-9.877-5.441Zm19.751-16.459v13.167h-19.186l3.95-13.167Zm21.817,0,3.95,13.167h-22.476V740.74Zm-55.449,0h14.961l-3.95,13.167h-18.911Zm-9.161,18.1V757.2h19.751v10.726c-2,1.454-6.589,2.441-9.877,2.441C2044.953,770.366,2041.26,764.509,2041.26,758.844Zm59.252,60.9V786.825h16.458v32.918Zm23.043,0h-3.292V785.18a1.647,1.647,0,0,0-1.647-1.647h-19.749a1.647,1.647,0,0,0-1.647,1.647v34.563h-46.085V773.658c2.892,0,7.939-.725,11.11-2.588,2.671,3.748,5.768,5.881,11.934,5.881,4.838,0,8.468-1.321,11.554-4.245,3.147,2.715,7.824,4.245,13.135,4.245,5.968,0,10.4-1.921,13.505-5.855a18.4,18.4,0,0,0,9.536,2.563,13.082,13.082,0,0,0,1.647-.115Zm9.875-60.9c0,5.922-5.6,11.522-11.522,11.522-2.713,0-6.175-.757-8.229-2.409V757.2h19.751Z"
												transform="translate(0 0)"
												fill="#21388b"
												stroke="#21388b"
												strokeWidth="1"
											></path>{" "}
											<circle
												cx="1.646"
												cy="1.646"
												r="1.646"
												transform="translate(2110.387 803.284)"
												fill="#21388b"
												stroke="#21388b"
												strokeWidth="1"
											></circle>
										</g>
									</svg>
									<span className="Font-button-sc">
										Pide en tiendas{" "}
										<span className="Font-button-sc-red">SIN COLAS</span>
									</span>
								</button>

								<div className="Icon-options">
									<img
										src="https://www.bembos.com.pe/img/icon-phone-header.svg"
										alt=""
									/>
									<FiMenu
										onClick={openLeftMenu}
										className="Menu-icon-options"
									/>
								</div>
							</>
						)}
					</div>
				</div>

				{!isMobile && (
					<div className="Menu-container">
						{/* Componente menú principal */}

						<NavMain />

						<div className="Cart-container">
							<button className="Button-sin-colas">
								<svg
									data-v-1a0fdd4b=""
									xmlns="http://www.w3.org/2000/svg"
									width="41"
									height="25"
									viewBox="0 0 99.754 86.587"
								>
									<g transform="translate(-2037.468 -736.948)">
										<path
											d="M2079.685,757.479h-32.918a1.647,1.647,0,0,0-1.645,1.647v23.041a1.647,1.647,0,0,0,1.645,1.647h32.918a1.647,1.647,0,0,0,1.647-1.647V759.126A1.647,1.647,0,0,0,2079.685,757.479Zm-1.645,23.044h-29.625V760.771h29.625Z"
											transform="translate(9.305 26.054)"
											fill="#21388b"
											stroke="#21388b"
											strokeWidth="1"
										></path>{" "}
										<path
											d="M2136.706,755.481a1.578,1.578,0,0,0-.193-.688c-.016-.028-.009-.06-.025-.087l-9.874-16.459a1.653,1.653,0,0,0-1.413-.8H2049.49a1.65,1.65,0,0,0-1.413.8l-9.875,16.459c-.016.028-.011.06-.025.087a1.623,1.623,0,0,0-.2.688c0,.021-.012.039-.012.06l0,.012v3.292c0,7.022,4.139,12.739,9.875,14.347v48.2a1.647,1.647,0,0,0,1.647,1.647H2125.2a1.645,1.645,0,0,0,1.645-1.647v-48.7c5.572-2.181,9.876-7.792,9.876-13.841v-3.292l0-.012A.524.524,0,0,0,2136.706,755.481Zm-4.537-1.574h-18.911l-3.95-13.167h14.961ZM2110.389,768.2c-2.524,3.757-6.09,5.459-11.522,5.459-4.868,0-9.014-1.452-11.522-3.975V757.2h23.044Zm-46.087-11h19.751v12.5c-2.6,2.752-5.588,3.955-9.874,3.955-4.866,0-7.155-1.254-9.877-5.441Zm19.751-16.459v13.167h-19.186l3.95-13.167Zm21.817,0,3.95,13.167h-22.476V740.74Zm-55.449,0h14.961l-3.95,13.167h-18.911Zm-9.161,18.1V757.2h19.751v10.726c-2,1.454-6.589,2.441-9.877,2.441C2044.953,770.366,2041.26,764.509,2041.26,758.844Zm59.252,60.9V786.825h16.458v32.918Zm23.043,0h-3.292V785.18a1.647,1.647,0,0,0-1.647-1.647h-19.749a1.647,1.647,0,0,0-1.647,1.647v34.563h-46.085V773.658c2.892,0,7.939-.725,11.11-2.588,2.671,3.748,5.768,5.881,11.934,5.881,4.838,0,8.468-1.321,11.554-4.245,3.147,2.715,7.824,4.245,13.135,4.245,5.968,0,10.4-1.921,13.505-5.855a18.4,18.4,0,0,0,9.536,2.563,13.082,13.082,0,0,0,1.647-.115Zm9.875-60.9c0,5.922-5.6,11.522-11.522,11.522-2.713,0-6.175-.757-8.229-2.409V757.2h19.751Z"
											transform="translate(0 0)"
											fill="#21388b"
											stroke="#21388b"
											strokeWidth="1"
										></path>{" "}
										<circle
											cx="1.646"
											cy="1.646"
											r="1.646"
											transform="translate(2110.387 803.284)"
											fill="#21388b"
											stroke="#21388b"
											strokeWidth="1"
										></circle>
									</g>
								</svg>
								<span className="Font-button-sc">
									Pide en tiendas{" "}
									<span className="Font-button-sc-red">SIN COLAS</span>
								</span>
							</button>

							<Link to="/cart" className="Button-cart">
								<svg
									data-v-1a0fdd4b=""
									xmlns="http://www.w3.org/2000/svg"
									width="32.009"
									height="32.009"
									viewBox="0 0 32.009 32.009"
								>
									<path
										d="M24.749 23.006H10.066a2.5 2.5 0 0 1-2.481-2.19l-2.3-18.388H1.212a1.214 1.214 0 0 1 0-2.428h5.144a1.214 1.214 0 0 1 1.2 1.063l.671 5.367h22.566a1.214 1.214 0 0 1 1.141 1.629l-4.837 13.3a2.508 2.508 0 0 1-2.348 1.647zM8.537 8.86l1.457 11.656a.072.072 0 0 0 .072.063h14.683a.072.072 0 0 0 .068-.048L29.062 8.86zM24.364 32.008a3.786 3.786 0 1 1 3.786-3.786 3.79 3.79 0 0 1-3.786 3.786zm0-5.145a1.358 1.358 0 1 0 1.358 1.358 1.36 1.36 0 0 0-1.358-1.357zM10.217 32.008a3.786 3.786 0 1 1 3.786-3.786 3.79 3.79 0 0 1-3.786 3.786zm0-5.145a1.358 1.358 0 1 0 1.359 1.359 1.36 1.36 0 0 0-1.359-1.358z"
										fill="#21388b"
									></path>
								</svg>
								<div className="Cart-counter Font-counter">{cart.length}</div>
							</Link>
						</div>
					</div>
				)}
			</div>

			{hasSecondNav && <SecondNav />}
		</header>
	);
};
