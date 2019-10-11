import React from 'react';
import './Container/Container.css'; 
import logo from '../img/logo1.svg';
import logo1 from '../img/comentario.svg';
import styled from 'styled-components'

const BorderContainer=styled.div`
`
const AutorComent=styled.input`
`
const CampoComent=styled.input`
margin: 0px 0px 30px 0px;
padding: 10px  60px;
`




const Foto = props => (
    <BorderContainer>
    <div className="Foto1">
        <PostPerfil/>


            <div className="Foto-corpo">
            <div className="Foto-corpo-pg">
                <img src={props.src}/>
                <div className="logo">
                <img src={logo}/>
                <img src={logo1}/>
                </div>
                <AutorComent/>
                <CampoComent type="text" name='texto'/>
                <button type="submit">Comentar</button>
                <div>
                    <lu></lu>
                </div>
            </div>
        </div>
     </div>
     </BorderContainer>
);

export default Foto;
