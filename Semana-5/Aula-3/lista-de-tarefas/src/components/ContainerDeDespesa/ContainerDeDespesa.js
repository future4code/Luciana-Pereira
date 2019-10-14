import React from "react";
import styled from 'styled-components';
import proptypes from 'prop-types';
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro'


const MainContainer = styled.div``

/*Definir ação para redirecionar para a pagina correta */

export class ListaContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <MainContainer>
                <TelaDeCadastro/>
            </MainContainer>

        );
    }
}