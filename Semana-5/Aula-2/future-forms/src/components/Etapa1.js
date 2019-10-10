import React, {Component} from 'react';


class Etapa1 extends Component {
      render () {
        return (
    <form>
          <h1>Etapa 1 - Dados Gerais</h1>

    <p>1. Qual seu nome ?</p>
      <input/>
      <p>1. Qual sua idade ?</p>
      <input/>
      <p>1. Qual seu email ?</p>
      <input/>
      <p>1. Qual sua escolaridade ?</p>
      <select>
        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
      </select>
      <button>Continuar</button>
      </form>
      );
    }
}

export default Etapa1;