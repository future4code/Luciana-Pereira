import React, {Component} from 'react';
import './App.css'; 
import Foto from './Componentes/Foto';
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

    const imagemPerfil1={
      src:"https://picsum.photos/id/1005/5760/3840",
      usuario:{
        nome:"Luciana ",
    imagem:"https://picsum.photos/id/1/5616/3744"
      }
    }

    const imagemPerfil2={
      src:"https://picsum.photos/id/1005/5760/3840",
      usuario:{
        nome:"Luciana ",
    imagem:"https://picsum.photos/id/1/5616/3744"
      }
    }
    return(
    <div className="App">
      <Foto {...imagemPerfil}/>
      <Foto {...imagemPerfil1}/>
      <Foto {...imagemPerfil2}/>
    </div>
    );
  }
}




export default App;
