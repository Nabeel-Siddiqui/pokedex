import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import '../styling/pokedex.css'
import '../App.css';

library.add(fas)



const PokeDex = ( props ) => {

    //the data is being passed in and manipulated, so since all pokemons don't have the same number of moves, and abilities that is being mapped through and displaying what is present.
    //the stats for the pokemon are all the same, they all have HP,Attack, etc. Another ternay is used, if the search function isn't being used then the showPokemon will be displayed
    // if the search box is being used the showSearch will be displayed.

    let pokemon = props.pokemon;
    let search = props.search;

    const isLoaded = search.moves;

    // console.log(isLoaded)
    // console.log(search)

    let pokemonTypes =pokemon.types.map(types => types)

    const showPokemon = () => {
        return (
        <div className="app-wrapper">
        
            <header>
                <h1 className="title">Pokédex</h1>
            </header>

            <section className="wild-pokemon">
                <img src= {pokemon.sprite} alt ='' className="sprite" />
                <h3>No.{pokemon.id}</h3>
                <h3>{pokemon.name}</h3>
                <button onClick={props.previous}><FontAwesomeIcon icon={["fas", "chevron-left"]}/></button> 
                <button onClick={props.next}><FontAwesomeIcon icon={["fas", "chevron-right"]}/></button>
                <h6>HEIGHT:{pokemon.height}</h6>  <h6>WEIGHT:{pokemon.weight}</h6>
            </section>

            <div class="grid-container">

                <div>
                    <h6>STATS:</h6>
                    <h6>HP: {pokemon.stats[0]} </h6>
                    <h6>ATTACK: {pokemon.stats[1]} </h6>
                    <h6>DEFENSE: {pokemon.stats[2]} </h6>
                    <h6>SPECIAL-ATTACK: {pokemon.stats[3]} </h6>
                    <h6>SPECIAL-DEFENSE: {pokemon.stats[4]} </h6>
                    <h6>SPEED: {pokemon.stats[5]} </h6>
                </div> 

                <div>
                    <h6>TYPES:</h6><h6>{pokemon.types.map(types => <li>{types}</li>)}</h6> 
                </div>

                <div>
                    <h6>ABILITIES:</h6><h6>{pokemon.abilities.map(abilities => <li>{abilities}</li>)}</h6>
                </div>

                <div className='scroll'>
                    <h6>MOVES:</h6><h6>{pokemon.moves.map(moves => <li >{moves}</li>)}</h6>
                </div> 

            </div>
        </div>
    )};


    const showSearch = () => {
        return (
            <div className="app-wrapper">
        
            <header>
                <h1 className="title">Pokédex</h1>
            </header>

            <section className="wild-pokemon">
                <img src= {search.sprite} alt ='' className="sprite" />
                <h3>No.{search.id}</h3>
                <h3>{search.name}</h3>
                <button onClick={props.previous}><FontAwesomeIcon icon={["fas", "chevron-left"]}/></button> 
                <button onClick={props.next}><FontAwesomeIcon icon={["fas", "chevron-right"]}/></button>
                <h6>HEIGHT:{search.height}</h6>  <h6>WEIGHT:{search.weight}</h6>
            </section>

            <div class="grid-container">

                <div>
                    <h6>STATS:</h6>
                    <h6>HP: {search.stats[0]} </h6>
                    <h6>ATTACK: {search.stats[1]} </h6>
                    <h6>DEFENSE: {search.stats[2]} </h6>
                    <h6>SPECIAL-ATTACK: {search.stats[3]} </h6>
                    <h6>SPECIAL-DEFENSE: {search.stats[4]} </h6>
                    <h6>SPEED: {search.stats[5]} </h6>
                </div> 

                <div>
                    <h6>TYPES:</h6><h6>{search.types.map(types => <li>{types}</li>)}</h6> 
                </div>

                <div>
                    <h6>ABILITIES:</h6><h6>{search.abilities.map(abilities => <li>{abilities}</li>)}</h6>
                </div>

                <div className='scroll'>
                    <h6>MOVES:</h6><h6>{search.moves.map(moves => <li >{moves}</li>)}</h6>
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

export default PokeDex


