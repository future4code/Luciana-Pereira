import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SmallCard} from './SmallCard';
import {PageSection} from './PageSection';
import {BigCard} from './BigCard';
import {ImageButton} from './ImageButton';
import PropTypes from 'prop-types';


function App(prop) {
  return (
    <div className="App">
      <PageSection titulo={'Dados Pessoais'}/>
      <BigCard imagem={'https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.0-9/13406975_1039430746136341_6611969552466215696_n.jpg?_nc_cat=102&_nc_eui2=AeGo3DRGh-qIQvHgie__Px8F0j3jVEzjBJx_Pb8XI17veffa36Iio235pyVuXA_AJBLNMKFP5frGk-7ST022RCnUfc238AuigRvt0vonrr87qQ&_nc_oc=AQl1Upwa4sEbzRawOcH18g1y1E8IgbKOCMoEosxdA8GMdL_2Bkl5-QSWjUInH3qL94k&_nc_ht=scontent.fcgh4-1.fna&oh=d6a3751cc12a63ade36694d03f5cab49&oe=5E355160'} paragrafo={'<b>Luciana Pereira</b><br/><br/>Olá, eu sou Luciana Pereira, sou estudante de Engenharia deProdução Sou muito uma pessoa muito curiosa que adrora ler.'}/>
      <SmallCard/>
      <ImageButton/>
    </div>
  );
}

export default App;
