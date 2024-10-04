import { useState } from "react";
import "./Style3.css";
import { preguntas } from "../FaqsData";

export const Style3 = ({id}) => {
    const pregunta = preguntas.find(p => p.id === id);

    const [selectedIndex, setSelectedIndex] = useState(0);


    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className="Style3-content">
            <div className="Style3-wrapper">
                {pregunta && pregunta.combinacion.map((item, index) => (
                    <div className="Style3-item" key={item.nrocomb} onClick={() => handleSelect(index)}>
                        <div className={`Style3-img ${selectedIndex === index ? 'active' : ''}`}>
                            <img src={item.img} alt={item.nombre} />
                        </div>
                        <p className="Style3-font">{item.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
