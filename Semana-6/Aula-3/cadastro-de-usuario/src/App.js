import React from 'react';
import CadastroDeUsuario from './components/CadastroDeUsuario/CadastroDeUsuario'
import ListaDeUsuario from './components/ListaDeUsuario/ListaDeUsuario'
import './App.css';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pagina:"CadastroDeUsuario",
      textoBotao:"Lista De Usuarios"      
    }
  }

onClicarPg = () => {
  if(this.state.pagina === "CadastroDeUsuario") {
  this.setState ({
    pagina: "ListaDeUsuario",
    textoBotao:"Voltar"  
  })
} else {
  this.setState = ({
    pagina:"CadastroDeUsuario",
    textoBotao:"Lista De Usuarios" 
  })
 }
}

/*Condição para abertura da pagina correta */
  render () {
    return (
      <div className="App">
        {
          this.state.pagina === "CadastroDeUsuario" ? <CadastroDeUsuario/> : <ListaDeUsuario/>
        }
        <button onClick = {this.onClicarPg}>{this.state.textoBotao}</button>
      </div>
    );
  }
}

 

export default App;
   

 

   