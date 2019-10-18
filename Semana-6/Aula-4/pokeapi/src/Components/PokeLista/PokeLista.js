import React from 'react';
import axios from 'axios';
import PokeCard from './Components/PokeCard/PokeCard';

class PokeLista extends Component{
  /*Config o estado */
  constructor(props){
    this.state = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        pokemon:null
    };
}

/* */
async  componentDidMount(){
   const rest = await axios.get(this.state.url);
    this.setState({pokemon: rest.data ['results']});
}

    render () {
        return (
        <div>
            <PokeCard
            key={pokemon.nome}
            nome={pokemon.nome}
            url={pokemon.url}
            />
        </div>

        );
    }
}

export default PokeLista;