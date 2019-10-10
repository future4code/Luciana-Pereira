import React from 'react';
import './PageSection.css';
import PropTypes from 'prop-types';

export function PageSection (props){
    return (
        
        <div className="container">
            <h1>{props.titulo}</h1>
            <h1>Experiência profissional</h1>
            <h1>Minhas redes sociais</h1>

        </div >
    );
}

PageSection.PropTypes = {
    titulo:PropTypes.string.isRequired,
}