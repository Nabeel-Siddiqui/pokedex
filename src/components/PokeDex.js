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
                <button onClick={props.previous}> <FontAwesomeIcon icon={["fas", "chevron-left"]}/>  </button>  <button onClick={props.next}><FontAwesomeIcon icon={["fas", "chevron-right"]}/></button>
            </section>

            <div class="wrapper">

                <div className="hw">
                    <h6>HEIGHT:{pokemon.height}</h6>  
                    <h6>WEIGHT:{pokemon.weight}</h6>
                </div>

                <div className='types'>
                    <h6>TYPES:</h6><h6>{pokemon.types.map(types => <li>{types}</li>)}</h6> 
                </div>

                <div className='ablity'>
                    <h6>ABILITIES:</h6>
                    <h6>{pokemon.abilities.map(abilities => <li>{abilities}</li>)}</h6>
                </div>

                <div className='scroll'>
                    <h6>MOVES:</h6>
                    <h6>{pokemon.moves.map(moves => <li >{moves}</li>)}</h6>
                </div>

                <div className="stats">
                    <h5>STATS:</h5>
                    <h6>HP: {pokemon.stats[0]} </h6>
                    <h6>ATTACK: {pokemon.stats[1]} </h6>
                    <h6>DEFENSE: {pokemon.stats[2]} </h6>
                    <h6>SPECIAL-ATTACK: {pokemon.stats[3]} </h6>
                    <h6>SPECIAL-DEFENSE: {pokemon.stats[4]} </h6>
                    <h6>SPEED: {pokemon.stats[5]} </h6>
                </div>

            </div>


            
                {/* <div className='stats'>
                <h6>HEIGHT - {pokemon.height}</h6> <h6>WEIGHT - {pokemon.weight}</h6> 
                <h6>TYPES - {pokemon.types.map(types => <li>{types}</li>)}</h6>
                </div>

                <div className='scroll'><h6>MOVES - </h6><h6>{pokemon.moves.map(moves => <li >{moves}</li>)}</h6>

                <div className='scroll'><h6>ABILITIES - {pokemon.abilities.map(abilities => <li>{abilities}</li>)}</h6></div> */}

       
                
                {/* <h5>STATS</h5>
                <h6>HP - {pokemon.stats[0]} </h6>
                <h6>Attack - {pokemon.stats[1]} </h6>
                <h6>Defense - {pokemon.stats[2]} </h6>
                <h6>Special-Attack - {pokemon.stats[3]} </h6>
                <h6>Special-Defense - {pokemon.stats[4]} </h6>
                <h6>Speed - {pokemon.stats[5]} </h6> */}
                </div>
    )};


    const showSearch = () => {
        return (
            <div className='row'>
            <div className='column'>
                <img src= {search.sprite} alt ='' className='image' height='350' width='350'/>
                <h4><ul>{search.name} - {search.id}</ul></h4>
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

export default PokeDex


