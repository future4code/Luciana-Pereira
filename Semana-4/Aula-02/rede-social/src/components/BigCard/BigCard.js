import React from 'react';
import './BigCard.css';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ContainerBigCard = styled.div`
border: 1px solid black;
width: 600px;
height: 200px;
padding: 20px;
margin: 5px 0px  5px 0px;
text-align: left;
display: flex;
`
const ImgFoto = styled.img`
display: inline-flex;
border-radius: 300%;
width: 100px;
height: 100px;
display: flex;
padding: 50px 10px;
`

export function BigCard (props){
    return (
        
                <ContainerBigCard>
            <ImgFoto src={props.imagem}/>
            <div>
            <h3>{props.titulo}</h3>
            <p>{props.conteudo}</p>
            </div>
                </ContainerBigCard>
    );
}

