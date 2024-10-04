import "./Faqs.css";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Style1 } from "./Style1";
import { Style2 } from "./Style2";
import { Style3 } from "./Style3";
import { Style4 } from "./Style4";
import { Style5 } from "./Style5";

export const Faqs = ({ estilos }) => {
    const initialAccordion = Array.from({ length: estilos.length }, () => true);
    const [accordion, setAccordion] = useState(initialAccordion);

    const accordionToggle = (index) => {
        setAccordion((prev) => {
            const newAccordion = [...prev];
            newAccordion[index] = !newAccordion[index];
            return newAccordion;
        });
    };

    const renderizarEstilo = (estilo, id) => {
        switch (estilo) {
            case 'Style1':
                return <Style1 id={id} />;
            case 'Style2':
                return <Style2 id={id} />;
            case 'Style3':
                return <Style3 id={id} />;
            case 'Style4':
                return <Style4 id={id} />;
            case 'Style5':
                return <Style5 id={id} />;
            default:
                return null; // Manejo por si el estilo no es reconocido
        }
    };

    return (
        <div className="Faqs-content">
            <div className='Faqs-wrapper'>
                {estilos.map((producto, index) => {
                    const isActive = accordion[index];
                    const className = `Faqs-info ${isActive ? 'active' : ''} faq-${producto.id}`;

                    return (
                        <div className={className} key={producto.id}>
                            <div className="Faqs-title-main Font-head Fbold" onClick={() => accordionToggle(index)}>
                                <div className="Faqs-num">{index + 1}</div>
                                <div className="Faqs-title">
                                    {producto.titulo}
                                    {isActive ? (
                                        <IoIosArrowDown className="Faqs-iconBottom" />
                                    ) : (
                                        <IoIosArrowUp className="Faqs-iconUp" />
                                    )}
                                </div>
                            </div>
                            <div className={`combinaciones ${isActive ? '' : 'collapsed'}`}>
                                {renderizarEstilo(producto.estilo, producto.id)}
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};
