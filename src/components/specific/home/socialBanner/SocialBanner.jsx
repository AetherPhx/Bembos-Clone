import "./SocialBanner.css";
import { FaShare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const SocialBanner = () => {
	return (
		<section className="SocialBanner">
			<div className="SocialBanner-header">
				<h3 className="SocialBanner-title">
					SOCIAL <br />
					BEMBOS
				</h3>
				<p className="SocialBanner-description">Compartir en:</p>

				<section className="SocialBanner-shareButtons">
					<a className="SocialBanner-link" href="">
						<img
							className="SocialBanner-link-img"
							src="https://www.bembos.com.pe/_ipx/q_60,s_145x32/img/link-tw.webp"
							alt="Twitter"
						/>
					</a>
					<a className="SocialBanner-link" href="">
						<img
							className="SocialBanner-link-img"
							src="https://www.bembos.com.pe/_ipx/q_60,s_145x32/img/link-fb.webp"
							alt="Facebook"
						/>
					</a>
				</section>
			</div>

			<div className="SocialBanner-fbCard">
				<div className="SocialBanner-fbCard-main">
					<div className="SocialBanner-logo">
						<a
							className="SocialBanner-logo-link"
							href="https://www.facebook.com/184501178986?ref=embed_page"
							target="_blank"
						>
							<img
								className="SocialBanner-logo-img"
								src="https://scontent.flim31-1.fna.fbcdn.net/v/t39.30808-1/434757251_830054629166575_7799433407921388986_n.jpg?stp=cp0_dst-jpg_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=6738e8&_nc_ohc=K_aKavPM4JUQ7kNvgHGY_gz&_nc_ht=scontent.flim31-1.fna&edm=ADwHzz8EAAAA&_nc_gid=AXgaSsG6q6rnWOwmJFQdSC-&oh=00_AYDEv1FfU-He5_TWupYXYKa5z61OBCh9DS-HBjExiNYa4A&oe=6700B5C6"
								alt="Logo de Bembos"
							/>
						</a>
					</div>

					<div className="SocialBanner-fbCard-info">
						<h3 className="SocialBanner-fbCard-title">BEMBOS</h3>
						<span className="SocialBanner-fbCard-followers">
							1.128.568 seguidores
						</span>
					</div>
				</div>

				<div className="SocialBanner-fbCard-share">
					<button className="SocialBanner-fbCard-shareBtn">
						<FaFacebookSquare color="#3a5897" />
						Seguir Página
					</button>
					<button className="SocialBanner-fbCard-shareBtn">
						<FaShare />
						Compartir
					</button>
				</div>
			</div>
		</section>
	);
};
