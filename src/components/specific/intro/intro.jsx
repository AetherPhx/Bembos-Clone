import "./Intro.css";

export const Intro = ({ title, description, question }) => {
    return (
        <div className="Intro-content">
            <div className="Intro-wrapper">
                <h2 className="Intro-Font-title">{title}</h2>
                <p className="Intro-description">{description}</p>
                <h3 className="Intro-title-questions">PREGUNTAS FRECUENTES {question}</h3>
            </div>
        </div>
    )
}
