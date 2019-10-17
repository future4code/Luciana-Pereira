import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ContainerCadastro = styled.div`
border:2px solid black;
margin: 10px 100px 10px 100px;
padding: 10px;
background-color: darkgray;
`

class CadastroDeUsuario extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: ""
        }
    }

/*Realizando a requisição*/
salvarCadastro = () => {
    const usuario = {
        name: this.state.name,
        email: this.state.email
    }

    axios.post(
        "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
        usuario,
        {
          headers: {
            "api-token": "1ec339ec18bc153027ff449588a01387"
          }  
        }
    ).then ((resultado) => {
        window.alert("Usuario cadastrado com sucesso")
    })
    
}
        
mudarNome = (event) => {
    this.setState ({
        name: event.target.value
    })
}

mudarEmail = (event) => {
    this.setState ({
        email: event.target.value
    })
}

    render(){
        return (
            
            <ContainerCadastro>
            <p>Nome:</p>
            <input value={this.state.name} onChange={this.mudarNome} placeholder="Nome"/>
            <p>Email:</p>
            <input value={this.state.email} onChange={this.mudarEmail} placeholder="Email"/>
            <button onClick={this.salvarCadastro}>Salvar</button>
            </ContainerCadastro>
        )
    }
}

export default CadastroDeUsuario;
