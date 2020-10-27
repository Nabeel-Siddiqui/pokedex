import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styling/pokeball.css'


function CatchPokemon(props) {
  // console.log(props)

  const ImageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  const URL = 'https://pokeapi.co/api/v2/pokemon/'

  const [pokeball, setPokeBall] = useState([])
  const [wildPokemon, setWildPokemon] = useState({});

  useEffect(() => {
  encounterWildPokemon()
  }, [])

  function randomID() {
    return Math.floor(Math.random() * 893) + 1;
  }
  
  function encounterWildPokemon() {
    axios
    .get(URL + randomID())
    .then(response => {
      setWildPokemon(response.data);
    });
  }
  
  function catchPokemon(pokemon) {
    setPokeBall(state => {
      const monExists = (state.filter(p => pokemon.id === p.id).length > 0);
      if (!monExists) {
        state = [...state, pokemon];
        state.sort(function (a, b) {
          return a.id - b.id;
        });
      }
      return state;
    });
    encounterWildPokemon();
  }

  function releasePokemon(id) {
    setPokeBall(state => state.filter(p => p.id !== id));
  }

  // const storage = [
  //   {name: wildPokemon.name},
  //   {id: wildPokemon.id},
  //   {img: ImageURL + wildPokemon.id + ".png" }
  // ]

  // localStorage.setItem("pokemonName", wildPokemon.name)
  // localStorage.setItem("pokemonID", wildPokemon.id)
  // localStorage.setItem("pokemonImage", ImageURL + wildPokemon.id + ".png")

  // localStorage.getItem("pokemonImage", "pokemonName","pokemonID" )
  
  // console.log(localStorage)

  return (
    <div className="app-wrapper">
      <header>
        <h1 className="title">Catch 'em All</h1>
      </header>
      
      <section className="wild-pokemon">
        <img alt ="" src={ImageURL + wildPokemon.id + ".png"} className="sprite" />
        <h3>{wildPokemon.name}</h3>
        <button className="catch-btn" onClick={() => catchPokemon(wildPokemon)}>CATCH</button>
      </section> 
          
      <section className="pokedex">
        <h2>My Pokémon</h2>
            <div className="pokedex-list">{pokeball.map(pokemon => (
              <div className="pokemon" key={pokemon.id}>
                <img alt ="" src={ImageURL + pokemon.id + ".png"} className="sprite" />
                <h3 className="pokemon-name">{pokemon.name}</h3>
                <button className="remove" onClick={() => releasePokemon(pokemon.id)}>&times;</button></div>))}
            </div>
        </section>  
    </div>
    )
  }

export default CatchPokemon;



