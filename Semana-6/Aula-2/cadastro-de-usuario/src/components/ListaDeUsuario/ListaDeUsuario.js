import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const ListaContainer = styled.div`
border:1px solid black;
`
  

class ListaDeUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lista:[]
        }
    }

    reqUsuario = () => {
        axios.get(
            "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
            {
             headers: {
             "api-token": "1ec339ec18bc153027ff449588a01387"
            }
         }
        ).then((resultado) => {
            this.setState({
                lista:resultado.data.result
            })

        })
}

    componentDidMount (){
     this.reqUsuario ()
    }

    deletarUsuario = (id) => {
        axios.delete(
            `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}`,
            {
                headers: {
                "api-token": "1ec339ec18bc153027ff449588a01387"
               }
            }
        ).then (( ) => {
            this.reqUsuario ()
        })
    }

    
    render(){
        return (
            <ListaContainer >
                <h2>Usuarios Cadastrados</h2>
                {
                  this.state.lista.map((usuario, i) => {
                      return (
                          <div key={i}>
                              <p>{usuario.name}</p>
                              <p onClick={ () => this.deletarUsuario (usuario.id)}> X </p>
                          </div>
                      )
                  })
                }

            </ListaContainer>

        );
    }

}

export default ListaDeUsuario;