import React from 'react';
import styled from 'styled-components'

const ContainerCadastro = styled.div`
border:1px solid black;
margin: 10px 100px 10px 100px;
padding: 10px;
`
const CadastroInp = styled.input`

`

class CadastroDeUsuario extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            
            <ContainerCadastro>
            <p>Nome:</p>
            <CadastroInp placeholder="Nome"/>
            <p>Email:</p>
            <CadastroInp placeholder="Email"/><br/>
            <button>Salvar</button>
            </ContainerCadastro>
        );
    }
}

export default CadastroDeUsuario;
