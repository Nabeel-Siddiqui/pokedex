import React from 'react';
import TypeColors from '../styling/TypeColors.js'

console.log(TypeColors)

const Screen = ( props ) => {

    let pokemon = props.pokemon;
    let search = props.search;

    const isLoaded = props.search.moves;

    // console.log(isLoaded)

    const showPokemon = () => {
        return (
        <div>
            <h3>{pokemon.name} - {pokemon.id}</h3>
            <img src= {pokemon.sprite} alt ='' className="sprite"/>
            <h5>Height - {pokemon.height}</h5> <h5>Weight - {pokemon.weight}</h5> 
            <h5>Moves - {pokemon.moves.map(moves => <ul >{moves}</ul>)}</h5>
            <h5>Abilities - {pokemon.abilities.map(abilities => <ul>{abilities}</ul>)}</h5>

            <div >

                <h5>Types - {pokemon.types.map(types => <ul style={{ backgroundColor: TypeColors[pokemon.types.map(types => types)] }}>{types}</ul>)}</h5>

            </div>
            

            <h5>HP - {pokemon.stats[0]} </h5>
            <h5>Attack - {pokemon.stats[1]} </h5>
            <h5>Defense - {pokemon.stats[2]} </h5>
            <h5>Special-Attack - {pokemon.stats[3]} </h5>
            <h5>Special-Defense - {pokemon.stats[4]} </h5>
            <h5>Speed - {pokemon.stats[5]} </h5>
        </div>
        )};



    const showSearch = () => {
        return (
        <div>
            <h3>{search.name} - {search.id}</h3>
            <img src= {search.sprite} alt ='' className="sprite"/>
            <h5>Height - {search.height}</h5> <h5>Weight - {search.weight}</h5> 
            <h5>Moves - {search.moves.map(moves => <ul >{moves}</ul>)}</h5>
            <h5>Abilities - {search.abilities.map(abilities => <ul>{abilities}</ul>)}</h5>
            
            <h5>Types - {search.types.map(types => <ul>{types}</ul>)}</h5>

            <h5>HP - {search.stats[0]} </h5>
            <h5>Attack - {search.stats[1]} </h5>
            <h5>Defense - {search.stats[2]} </h5>
            <h5>Special-Attack - {search.stats[3]} </h5>
            <h5>Special-Defense - {search.stats[4]} </h5>
            <h5>Speed - {search.stats[5]} </h5>
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


