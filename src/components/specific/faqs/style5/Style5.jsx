import "./Style5.css";
import { preguntas } from "../FaqsData";
import { useState } from "react"; 

export const Style5 = ({ id }) => { 
    const pregunta = preguntas.find(p => p.id === id); 

    const [primerElemento, ...resto] = pregunta ? pregunta.combinacion : [];
    const [isActive, setIsActive] = useState(false); 

    return (
        <div className="Style5-content">
            <div className="Style5-wrapper">
                {primerElemento && (
                    <div className="Style5-item">
                        <div 
                            className={`Style5-first ${isActive ? 'active' : ''}`} 
                            onClick={() => setIsActive(!isActive)} 
                        >
                            <img src={primerElemento.img} alt={primerElemento.nombre} />
                        </div>
                    </div>
                )}

                {resto.map(item => (
                    <div className="Style5-item" key={item.nrocomb}>
                        <div className="Style5-img">
                            <div><img src={item.img} alt={item.nombre} /></div>
                            <div className="Style5-selectores">
                                <button className="Style5-button">-</button>
                                <p>0</p>
                                <button className="Style5-button right">+</button>
                            </div>
                        </div>
                        <p className="Style5-font">{item.nombre}</p>
                        <p className="Style5-font">+ S/.{item.precio.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
