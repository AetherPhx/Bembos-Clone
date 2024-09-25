import { ItemCardMenu } from "./ItemCardMenu";

import "./CardMenu.css";

export function CardMenu() {

    const urlBanner1 = 'https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/promociones-bembos-delivery.webp';
    const urlBanner2 = 'https://www.bembos.com.pe/_ipx/q_60,s_230x308/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/combo-churrita-500x669.webp';
    const urlBanner3 = 'https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/hamburguesas_2.webp';
    const urlBanner4 = 'https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/pollo_2.webp';
    const urlBanner5 = 'https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/loncheritas_1.webp';
    const urlBanner6 = 'https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/complementos_1.webp';
    const urlBanner7 = 'https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-gaseosas.webp';
    const urlBanner8 = 'https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-mini-princesa.webp';
    const urlBanner9 = 'https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-inka-chips-1.webp';

    return (
        <div className="Content">
            <div className="CardMenu-content">
                <ItemCardMenu title={'Promociones Exclusivas Web'} imageUrl={urlBanner1} />
                <ItemCardMenu title={'Combos'} imageUrl={urlBanner2} />
                <ItemCardMenu title={'Hamburguesas'} imageUrl={urlBanner3} />
                <ItemCardMenu title={'Pollo'} imageUrl={urlBanner4} />
                <ItemCardMenu title={'Loncheritas'} imageUrl={urlBanner5} />
                <ItemCardMenu title={'Complementos'} imageUrl={urlBanner6} />
                <ItemCardMenu title={'Bebidas'} imageUrl={urlBanner7} />
                <ItemCardMenu title={'Helados'} imageUrl={urlBanner8} />
                <ItemCardMenu title={'Inka Chips'} imageUrl={urlBanner9} />
            </div>
        </div>
    )
};

