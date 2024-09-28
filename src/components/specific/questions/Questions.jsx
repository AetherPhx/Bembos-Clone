import "./Questions.css";
import { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";

export const Questions = () => {
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

        <div className="Faqs-content">
            <div className='Faqs-wrapper'>
                {content.map((item, index) => (
                    <div className={`Faqs-info ${accordion.includes(index) ? 'open' : ''}`} key={index}>
                        <div className="Faqs-title Font-description-bold" onClick={() => accordionToggle(index)}>
                            {item.title} {accordion.includes(index) ? <span className="Faqs-iconUp"><FaChevronCircleUp /></span> : <span className="Faqs-iconBottom"><FaChevronCircleDown /></span>}
                        </div>
                        <p className={`Faqs-description Font-description.small ${accordion.includes(index) ? 'Faqs-open' : ''}`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}