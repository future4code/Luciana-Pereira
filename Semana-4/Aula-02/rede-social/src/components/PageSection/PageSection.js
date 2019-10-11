import React from 'react';
import './PageSection.css';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const SectionContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
`

export function PageSection (props){
    return (
        
        <SectionContainer>
            <h1>{props.titulo}</h1>
            {props.children}
        </SectionContainer>
    );
}

