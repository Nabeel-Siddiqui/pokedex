import React from 'react';
import TypeColors from '../styling/TypeColors.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

console.log(TypeColors)

const Screen = ( props ) => {

    //the data is being passed in and manipulated, so since all pokemons don't have the same number of moves, and abilities that is being mapped through and displaying what is present.
    //the stats for the pokemon are all the same, they all have HP,Attack, etc. Another ternay is used, if the search function isn't being used then the showPokemon will be displayed
    // if the search box is being used the showSearch will be displayed.

    let pokemon = props.pokemon;
    let search = props.search;

    const isLoaded = props.search.moves;

    // console.log(isLoaded)

    const showPokemon = () => {
        return (
        <div className='row'>
            <div className='column'>
                <h4><ul>{pokemon.name} - {pokemon.id}</ul></h4>
                <img src= {pokemon.sprite} alt ='' className='image' height='350' width='350'/>
            </div>
            <div className='column'></div>
            <div className='column'>
                <div className='stats'>
                <h6>Height - {pokemon.height}</h6> <h6>Weight - {pokemon.weight}</h6> 
                <h6>Moves - </h6><div className='scroll'> 
                <h6>{pokemon.moves.map(moves => <li >{moves}</li>)}</h6>
                </div>
                <div className='scroll'><h6>Abilities - {pokemon.abilities.map(abilities => <li>{abilities}</li>)}</h6></div>
                <h6>Types - {pokemon.types.map(types => <li>{types}</li>)}</h6>
                <h6>HP - {pokemon.stats[0]} </h6>
                <h6>Attack - {pokemon.stats[1]} </h6>
                <h6>Defense - {pokemon.stats[2]} </h6>
                <h6>Special-Attack - {pokemon.stats[3]} </h6>
                <h6>Special-Defense - {pokemon.stats[4]} </h6>
                <h6>Speed - {pokemon.stats[5]} </h6>
                <button onClick={props.previous}> <FontAwesomeIcon icon={["fas", "chevron-left"]}/>  </button>  <button onClick={props.next}><FontAwesomeIcon icon={["fas", "chevron-right"]}/></button>
                </div>
            </div>
        </div>
    )};



    const showSearch = () => {
        return (
            <div className='row'>
            <div className='column'>
                <h4><ul>{search.name} - {search.id}</ul></h4>
                <img src= {search.sprite} alt ='' className='image' height='350' width='350'/>
            </div>
            <div className='column'></div>
            <div className='column'>
                <div className='stats'>
                <h6>Height - {search.height}</h6> <h6>Weight - {search.weight}</h6> 
                <h6>Moves - </h6><div className='scroll'> 
                <h6>{search.moves.map(moves => <li >{moves}</li>)}</h6>
                </div>
                <div className='scroll'><h6>Abilities - {search.abilities.map(abilities => <li>{abilities}</li>)}</h6></div>
                <h6>Types - {search.types.map(types => <li>{types}</li>)}</h6>
                <h6>HP - {search.stats[0]} </h6>
                <h6>Attack - {search.stats[1]} </h6>
                <h6>Defense - {search.stats[2]} </h6>
                <h6>Special-Attack - {search.stats[3]} </h6>
                <h6>Special-Defense - {search.stats[4]} </h6>
                <h6>Speed - {search.stats[5]} </h6>
                <button onClick={props.previous}> <FontAwesomeIcon icon={["fas", "chevron-left"]}/>  </button>  <button onClick={props.next}><FontAwesomeIcon icon={["fas", "chevron-right"]}/></button>
                </div>
            </div>
        </div>
        )};



    return (

        <div>

            {/* {showPokemon()}; */}


            { isLoaded ? showSearch() : showPokemon() }

        </div>

        );
    };

export default Screen


