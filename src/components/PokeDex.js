import React from 'react';
import Screen from './Screen.js';
import '../styling/pokedex.css'
 
const PokeDex = ( props ) => {

    const isLoaded = props.pokemon.moves;

    // console.log(props)

    return (
        <div>

        {isLoaded ? <Screen key={props.pokemon.id} pokemon={props.pokemon} search={props.search} input={props.input}/> : <p>PAGE IS LOADING.......</p>}

        </div>
    )
}

export default PokeDex