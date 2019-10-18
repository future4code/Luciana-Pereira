import React  from 'react';
import axios from 'axios';
import styled from 'styled-components'

const PokeImage = styled.img`
width:4em;
height:4em;
`

class PokeCard extends React.Component{
    state = {
        nome: '',
        imagemUrl:'',
        indPokemon:'',
        requisicao:false,
        carregImg: true
    };

    componentDidMount (){
        const {nome, url} = this.props;
        const indPokemon = url.split('/')[url.split('/').length -2];
        const imagemUrl = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${indPokemon}.png?raw=true'

        this.setState({
            nome,
            imagemUrl,
            indPokemon
        });
    }
  
    render () {
        return (
        <div>
            <div>
            <h2>{this.state.indPokemon }</h2>
            <PokeImage onLoad={() => this.setState ({carregImg:false})}
            onError={() => this.setState({requisicao:true})}
            src={this.state.imagemUrl}></PokeImage>
            </div>
       <div>
           <h4>{this.state.nome}</h4>
       </div>
        </div>

        );
    }
}

export default PokeCard;