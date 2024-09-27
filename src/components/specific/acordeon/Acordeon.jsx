import "./Acordeon.css";
import { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";

export const Acordeon = () => {
    const [accordion, setAccordion] = useState([]);

    const content = [
        {
            title: '¿Cuántos puntos recibo por comprar una hamburguesa online delivery?',
            description: 'Los puntos que se reciben por la compra de algún producto de nuestra carta de hamburguesas varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web.1'
        },
        {
            title: '¿De qué están hechas las hamburguesas a la parrilla de Bembos?',
            description: 'Nuestras hamburguesas Bembos están hechas de carnes de res junto a los más exquisitos ingredientes peruanos.'
        },
        {
            title: '¿Las hamburguesas delivery de Bembos están acompañadas de papas fritas?',
            description: 'Sí, Puedes hacer tu pedido de hamburguesas online y podrás comprarla únicamente sola o con papas fritas, incluso puedes pedirlo en combo (Papas+Gaseosa de 500ml)'
        },
        {
            title: '¿Qué adicionales tienen las hamburguesas a la parrilla de Bembos?',
            description: 'Los adicionales que tiene nuestra carta de hamburguesas varían según la elección del usuario, entre estos tenemos: Plátano, huevo, queso, tocino, papas al hilo y las más exquisitas salsas peruanas.'
        }
    ];

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

        <div className="Accordion-main">
            <div className='Accordion-wrapper'>
                {content.map((item, index) => (
                    <div className={`Accordion-info ${accordion.includes(index) ? 'open' : ''}`} key={index}>
                        <div className="Accordion-title Font-description-bold" onClick={() => accordionToggle(index)}>
                            {item.title} {accordion.includes(index) ? <span className="Accordion-iconUp"><FaChevronCircleUp /></span> : <span className="Accordion-iconBottom"><FaChevronCircleDown /></span>}
                        </div>
                        <p className={`Accordion-description Font-description.small ${accordion.includes(index) ? 'Accordion-open' : ''}`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}