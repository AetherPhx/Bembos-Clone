import "./Style2.css";
import { preguntas } from "../FaqsData";


export const Style2 = ({ id }) => {
    const pregunta = preguntas.find(p => p.id === id);

    return (
        <div className="Style2-content">
            <div className="Style2-wrapper">
                {pregunta && pregunta.combinacion.map(item => (
                    <div className="Style2-item" key={item.nrocomb}>
                        <div className="Style2-img">
                            <div><img src={item.img} alt={item.nombre} /></div>
                            <div className="Style2-selectores">
                                <button className="Style2-button">-</button>
                                <p>0</p>
                                <button className="Style2-button right">+</button>
                            </div>
                        </div>
                        <p className="Style2-font">{item.nombre}</p>
                        <p className="Style2-font">+ S/.{item.precio.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};