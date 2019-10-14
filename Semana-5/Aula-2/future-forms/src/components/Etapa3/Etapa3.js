import React, {Component} from 'react';


class Etapa3 extends Component {
      render () {
        return (
    <form>
          <h1>Etapa 2 - Informações Educacionais</h1>

    <p>1. Por que não terminou um curso de graduação ?</p>
      <input/>
      <p>2. Você fez algum curso complementar ?</p>
      <select>
        <option value="Curso técnico">Curso técnico</option>
        <option value="Curso de inglês">Curso de inglês</option>
        <option value="Não fiz nem curso complementar">Não fiz nem curso complementar</option>
        </select>
      <button>Continuar</button>
      </form>
      );
    }
}

export default Etapa3;