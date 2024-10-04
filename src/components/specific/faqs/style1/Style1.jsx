import { useState } from "react";
import "./Style1.css";
import { preguntas } from "../FaqsData";

export const Style1 = ({ id }) => {
    const pregunta = preguntas.find(p => p.id === id);
    
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className="Style1-content">
            <div className="Style1-wrapper">
                {pregunta && pregunta.combinacion.map((item, index) => (
                    <div className="Style1-item" key={item.nrocomb} onClick={() => handleSelect(index)}>
                        <div className={`Style1-img ${selectedIndex === index ? 'active' : ''}`}>
                            <div><img src={item.img} alt={item.nombre} /></div>
                            <p className="Style1-font">+ S/.{item.precio.toFixed(2)}</p>
                        </div>
                        <p className="Style1-font">{item.nombre}</p>
                    </div>
                ))}
           
                <div className={`Style1-item Style1-img ${selectedIndex === -1 ? 'active' : ''}`} onClick={() => handleSelect(-1)}>
                    <span className="Style1-font">NINGUNO</span>
                </div>
            </div>
        </div>
    );
};
