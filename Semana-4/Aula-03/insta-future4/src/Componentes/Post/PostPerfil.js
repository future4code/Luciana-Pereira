import React from 'react'
import styled from 'styled-components'

const ContainerPostPerfil= styled.div`
display: flex;
flex-direction: row;
height: 20px;
padding:16px;
border: 1px solid black;
`
const FotoPerfil = styled.div`
align-self: center;
`
const ContainerImg = styled.div`
height: auto;
  width:600%;
  `
const NomePerfil = styled.div`
margin-left: 7px;
padding-left: 5px;
font-weight: 200;
color: brown;
`  

const imagemPost = styled.img`
position: relative;
width: 50px;
height: 50px;
overflow: hidden;
flex: 0 0 auto;
border-radius: 50%;
display: block;
`
const ContNome = styled.canvas`
position: absolute;
 width: 40px;
height: 40px;
left: 0px;
top: 0px;
transform: translate(-6px, 5px);
align-self: center;
`

export function PostComentario(props){
    return(
        <ContainerPostPerfil>
          
        </ContainerPostPerfil>

    );
}