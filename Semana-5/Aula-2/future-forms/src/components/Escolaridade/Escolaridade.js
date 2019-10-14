import React, {Component} from 'react';
import proptypes from 'prop-types'
import Etapa2 from './components/Etapa2/Etapa2'
import Etapa3 from './components/Etapa3/Etapa3'


function Escolaridade (props) {
  return props.ensinoSIn && props.ensinoSCo ? (<Etapa2/>) : (<Etapa3/>);
}

export default Escolaridade;

