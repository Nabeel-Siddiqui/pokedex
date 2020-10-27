import React from 'react';
import PokeDex from './PokeDex.js';
import '../styling/pokedex.css'
import '../App.css';
import CatchPokemon from './CatchPokemon.js';

 
const LoadingScreen = ( props ) => {

    // The first time the API loads, the array is empty, the second time it loads is when the data is in the array, because of this, mapping or manipulating anything in the array is not possible until,
    // the API loads again, so a ternary is set to display this. since the pokemon fetch happens last, we use this to determine if the array is filled. The ternary says that if the array is loaded,
    // display the screen component, else display that the page is loading.

    const isLoaded = props.pokemon.moves;

    return (
    <div className="App">
    {isLoaded ? <PokeDex key={props.pokemon.id} pokemon={props.pokemon} search={props.search} input={props.input} next={props.next} previous={props.previous}/> || <CatchPokemon key={props.catch.id} pokemon={props.catch} random={props.random}/>: <p>PAGE IS LOADING.......</p>}
    </div>
 
    )
}

export default LoadingScreen



