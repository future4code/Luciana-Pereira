import React, {Component} from 'react';
import './App.css';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2'
import Etapa3 from './components/Etapa3/Etapa3'
import Escolaridade from './components/Escolaridade/Escolaridade';
import styled from 'styled-components';
import proptypes from 'prop-types';

const MainContainer = styled.div`
align-itens:center;
`


/*Definir ação para redirecionar para a pagina correta */
class App extends React.Component{
  constructor(props){
    super(props)
    this.mensagem="Enviar"
    this.state ={
      ensinoMIn:true,
      ensinoMCo:true,
      ensinoSIn:false,
      ensinoSCo:false,
    }
  }

  aoClicar = () => {
    this.setState({ensinoSuperior:! this.state.ensinoSIn})
  }

  render(){
  return (
    <MainContainer>
     <Escolaridade ensinoSuperior={this.state.ensinoSCo && this.state.ensinoSIn}/>
     {
       (this.state.ensinoSCo && this.state.ensinoSCo)
     }
     <button onClick={this.aoClicar}>{this.mensagem}</button>
    </MainContainer>
  );
  }
}

export default App;

