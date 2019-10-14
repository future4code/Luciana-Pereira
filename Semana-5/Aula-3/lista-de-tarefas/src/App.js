import React, {Component} from 'react';
import styled from 'styled-components'
import ContainerDeDespesa from './components/ContainerDeDespesa/ContainerDeDespesa'
import './App.css';

const ItemDaLista = styled.li`
texto: ${props => props.texto};
`


export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listaDeItens: [{
        texto:''
      }]
    }
  }

  adicionarItem = () => {
    console.log('Adicionar item:', this.state.valorTexto)
    const novoItem = {
      texto: this.state.valorTexto
    }

    const copiaListaDeItens = [novoItem, ...this.state.listaDeItens]

    this.setState ({
      listaDeItens: copiaListaDeItens, valorTexto:''
    })
  }

  onChangeItem = (event) => {
    this.setState ({valorTexto:event.target.value})
  }

  render () {
    const listaDeElementos = this.state.listaDeItens.map((item, index) => {
      return <ItemDaLista key={index}>{item.texto}</ItemDaLista>
    })

    return (
      <div>
         <ContainerDeDespesa/>    
      </div>
      
    );
  }
}

