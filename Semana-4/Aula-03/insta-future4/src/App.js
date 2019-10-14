import React, {Component} from 'react';
import './App.css'; 
import ItemContainer from './Components/ItemContainer/itemContainer';
import PropTypes from 'prop-types';
import styled from 'styled-components'



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
      <ItemContainer {...imagemPerfil}/>
      <ItemContainer {...imagemPerfil}/>
      <ItemContainer {...imagemPerfil}/>
    </div>
    );
  }
}




export default App;
