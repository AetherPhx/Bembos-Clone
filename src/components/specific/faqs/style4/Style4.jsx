import { useState } from "react";
import "./Style4.css";
import { preguntas } from "../FaqsData";

export const Style4 = ({id}) => {
    const pregunta = preguntas.find(p => p.id === id);


    const [selectedIndex, setSelectedIndex] = useState([]);

    const handleSelect = (index) => {

        if (selectedIndex.includes(index)) {

            setSelectedIndex(selectedIndex.filter(i => i !== index));

        } else {

            setSelectedIndex([...selectedIndex, index]);
        }
    };

    return (
        <div className="Style4-content">
            <div className="Style4-wrapper">
                {pregunta && pregunta.combinacion.map((item, index) => (
                    <div className="Style4-item" key={item.nrocomb} onClick={() => handleSelect(index)}>
                        <div className={`Style4-img ${selectedIndex.includes(index) ? 'active' : ''}`}>
                            <img src={item.img} alt={item.nombre} />
                        </div>
                        <p className="Style4-font">{item.nombre}</p>
                        <p className="Style4-font-number">+ S/.{item.precio.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
