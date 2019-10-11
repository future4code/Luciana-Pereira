import React, {Component} from 'react';
import './App.css'; 
import Foto from './Componentes/Container/Container';
import PropTypes from 'prop-types';



class App extends Component {

  render(){
    const imagemPerfil={
      src:"https://picsum.photos/id/1005/5760/3840",
      usuario:{
        nome:"Luciana",
    imagem:"https://picsum.photos/id/1/5616/3744"
      }
    }

    return(
    <div className="App">
      <Container {...imagemPerfil}/>
      <Container {...imagemPerfil}/>
      <Container {...imagemPerfil}/>
    </div>
    );
  }
}




export default App;
