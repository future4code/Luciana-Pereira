import React from 'react';
import './SmallCard.css';
import styled from 'styled-components'

const SmallContainer=styled.div`
border: 1px solid black;
width: 600px;
height: 100px;
padding: 20px;
margin: 10px 0px  10px 0px;
display: flex;
justify-content: flex;
`

export function SmallCard (props){
    return (
        <SmallContainer>
            <img src={props.imagem}/>
            <p>{props.endereco}</p>
        </SmallContainer>
        
    );
}

