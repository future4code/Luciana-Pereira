import React, {Component} from 'react';
import styled from 'styled-components'

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
      <select name="formacao" onchange="redirecionar.call(this)"> 
        <option value="Ensino Médio Incompleto" >Ensino Médio Incompleto</option>
        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
        <option value="Etapa2">Ensino Superior Incompleto</option>
        <option value="Etapa2">Ensino Superior Completo</option>
      </select>
      <button type="submit">Continuar</button>
      </form>
      );
    }
}

export default Etapa1;