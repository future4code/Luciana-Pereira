import React from 'react'
import styled from 'styled-components'

const ContainerBotao = styled.button`
border: 1px solid black;
align-items: center;
display: flex;
border-radius: 60px;
padding: 5px 100px;
margin: 10px 50px;
font-size: 15px;
display: inline-flex;
text-align: left;
background-color: white;
color: black;
`
const LogoBotao = styled.img`
width: 50px;
padding: 0px 5px:
`

export function ImageButton (props){
    return (
      <ContainerBotao >
        <LogoBotao src={props.logo}/>
        <p>{props.textob}</p>
      </ContainerBotao>
        
    );
}

