import styled from 'styled-components';
import proptypes from 'prop-types';
import React, {Component} from 'react';

const ListaDeDespesa = styled


export class TelaDeCadastro extends React.Component {
    render (){
        <div>
            <h1>Controlador De Despesas</h1>
        <input type="text" placeholder="Digite aqui um item para a lista"
        value={this.state.valorTexto} onChange={this.onChangeTexto}/>
              <button onClick={this.adicionarItem}>Adicionar Item</button>

        <ul>
          {listaDeElementos}
        </ul>
      
      </div>
    }
}