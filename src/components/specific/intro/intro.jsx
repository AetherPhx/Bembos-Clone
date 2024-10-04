import { Questions } from "../questions";
import "./Intro.css";

export const Intro = ({ faq }) => {
	if (!faq) return null;
	return (
		<div className="Intro-content">
			<div className="Intro-wrapper">
				<h2 className="Intro-Font-title">{faq.nombre}</h2>
				<p className="Intro-description">{faq.descripcion}</p>
			</div>
			<>
				{/* <h3 className="Intro-title-questions">{faq.titulo}</h3> */}
				<Questions titulo={faq.titulo} questions={faq.questions} />
			</>
		</div>
	);
};
