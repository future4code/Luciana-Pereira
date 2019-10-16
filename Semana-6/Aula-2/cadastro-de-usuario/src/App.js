import React from 'react';
import CadastroDeUsuario from './components/CadastroDeUsuario/CadastroDeUsuario'
import './App.css';

const usuario = {
  name:"",
  email:""
}

const ListaDeUsuario = [
  {
    id:"",
    name:""
  }
]

function App() {
  return (
    <div className="App">
      <CadastroDeUsuario/>
    </div>
  );
}

export default App;
