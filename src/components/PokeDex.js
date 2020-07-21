import React from 'react';
import Screen from './Screen.js';
import '../styling/pokedex.css'
 
const PokeDex = ( props ) => {

    // The first time the API loads, the array is empty, the second time it loads is when the data is in the array, because of this, mapping or manipulating anything in the array is not possible until,
    // the API loads again, so a ternary is set to display this. since the pokemon fetch happens last, we use this to determine if the array is filled. The ternary says that if the array is loaded,
    // display the screen component, else display that the page is loading.

    const isLoaded = props.pokemon.moves;

    // console.log(props)

    return (
        <div>

        {isLoaded ? <Screen key={props.pokemon.id} pokemon={props.pokemon} search={props.search} input={props.input} next={props.next} previous={props.previous}/> : <p>PAGE IS LOADING.......</p>}

        </div>
    )
}

export default PokeDex