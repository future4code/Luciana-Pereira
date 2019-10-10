import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types';


export function BigCard (props){
    return (
        
        <div className="container">
            <div className="item-um">
            <img className="foto" src={props.imagem}/>
            <p>{props.paragrafo}</p>
                </div>

                <div className="item-quatro">
                <img className="logo-woman" src="https://womantec.com.br/wp-content/uploads/2019/08/cropped-free_horizontal_on_white_by_logaster.png"/>
                <p><b>WomanTec</b><br/><br/>Assistente Administrativo - area operacional.</p>
                </div>
                <div className="item-cinco">
                    <img className="logo-carsystem" src="data:image/jpeg;base64,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"/>
                <p><b>Carsystem</b><br/><br/>Suporte Tecnico - area operacional</p>
                </div>
                </div>
    );
}

BigCard.PropTypes = {
    imagem: proptypes.string.isRequired,
    paragrafo: proptypes.string.isRequired,
}