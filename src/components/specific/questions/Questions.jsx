import "./Questions.css";
import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";

export const Questions = ({ titulo, questions }) => {
	const [accordion, setAccordion] = useState([]);

	const accordionToggle = (index) => {
		setAccordion((prev) => {
			if (prev.includes(index)) {
				return prev.filter((item) => item !== index);
			} else {
				return [...prev, index];
			}
		});
	};

	return (
		<div className="Faqs-content">
			<h3 className="Faqs-title">{titulo}</h3>
			<div className="Faqs-wrapper">
				{questions.map((item, index) => (
					<div
						className={`Faqs-info ${accordion.includes(index) ? "open" : ""}`}
						key={index}
					>
						<div
							className="Faqs-question Font-description-bold"
							onClick={() => accordionToggle(index)}
						>
							{item.nombre}{" "}
							{accordion.includes(index) ? (
								<span className="Faqs-iconUp">
									<FaChevronCircleUp />
								</span>
							) : (
								<span className="Faqs-iconBottom">
									<FaChevronCircleDown />
								</span>
							)}
						</div>
						<p
							className={`Faqs-description Font-description.small ${
								accordion.includes(index) ? "Faqs-open" : ""
							}`}
						>
							{item.respuesta}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
