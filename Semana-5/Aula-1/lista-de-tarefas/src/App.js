import React, {Component} from 'react';
import styled from 'styled-components'
import './App.css';

const DContainer = styled.div `
color: black;
ite

`

const ItemDaLista = styled.li`
texto: ${props => props.texto};
`


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listaDeItens: [],
        texto:""
      
    };
  }

  adicionarItem = () => {
    console.log('Adicionar item:', this.state.valorTexto)
    const novoItem = {
      texto: this.state.valorTexto
    }

    const copiaListaDeItens = [novoItem, ...this.state.listaDeItens]

    this.setState ({
      listaDeItens: copiaListaDeItens, texto:"",
    })
  }

  onChangeItem = (event) => {
    this.setState ({texto:event.target.value});
  }

  render () {
    const listaDeElementos = this.state.listaDeItens.map((item) => {
      return <ItemDaLista item={intem}>{item.texto}</ItemDaLista>
    })

    return (
      <div>
        <input type="text" placeholder="Digite aqui um item para a lista"
        value={this.state.texto} onChange={this.onChangeTexto}/>
              <button onClick={this.adicionarItem}>Adicionar Item</button>

        <ul>
          {listaDeElementos}
        </ul>
      
      </div>
      
    );
  }
}

export default App;
