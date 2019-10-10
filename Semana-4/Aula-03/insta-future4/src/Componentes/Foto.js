import React from 'react';
import logo from '../img/logo1.svg';
import logo1 from '../img/comentario.svg';


const Foto = props => (
    <div className="Foto1">
        <div className="Perfil">
            <div className="Foto-perfil">
                <canvas className="Foto-perfil-item"/>
                <span className="Foto-perfil-item1">
                    <img src={props.usuario.imagem}/>
                </span>
            </div>
            <div className="Nome">
                <p href="">{props.usuario.nome}</p>
            </div>
            <div className="Foto-corpo">
            <div className="Foto-corpo-pg">
                <img src={props.src}/>
                <div className="logo">
                <img src={logo}/>
                </div>
                <div className="logo1">
                <img src={logo1}/>
                </div>
            </div>
        </div>
     </div>
     </div>
);

export default Foto;
