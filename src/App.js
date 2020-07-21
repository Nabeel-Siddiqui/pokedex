import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeDex from './components/PokeDex.js';
import NavBar from './components/NavBar.js';
import './App.css';


function App() {

  const URL = "https://pokeapi.co/api/v2/pokemon/";

  let pokemonID = 1;

  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState(pokemonID);

  const [searchPokemon, setSearchPokemon] = useState([]);

  const [search, setSearch] = useState("");

  let input = search;

  function nextPokemon () {
    Math.min(setPokemonIndex(pokemonIndex + 1, 807))
  }

  function previousPokemon () {
    Math.max(setPokemonIndex(pokemonIndex - 1, 1));
  }

  useEffect(() => {
    const fetchData = async () => {

      const search = await axios (`${URL}${input}`);
      const result = await axios (`${URL}${pokemonIndex}`);

      // console.log(search.data)

      // console.log(result.data)
      // abilities height id name sprite stats types weight moves
    
      if (input !== '') {

        setSearchPokemon({

          name: search.data.name.charAt(0).toUpperCase() + search.data.name.slice(1), 
          weight: search.data.weight, 
          height: search.data.height, 
          id: search.data.id,
          sprite: search.data.sprites.front_default,
          types: search.data.types.map(pokemon => pokemon.type.name),
          stats: search.data.stats.map(pokemon => pokemon.base_stat),
          abilities: search.data.abilities.map(pokemon => pokemon.ability.name),
          moves: search.data.moves.map(pokemon => pokemon.move.name)

        });
        
      } else {
        setSearchPokemon({})
      };

      setPokemonData({
        
        name: result.data.name.charAt(0).toUpperCase() + result.data.name.slice(1), 
        weight: result.data.weight, 
        height: result.data.height, 
        id: result.data.id,
        sprite: result.data.sprites.front_default,
        types: result.data.types.map(pokemon => pokemon.type.name),
        stats: result.data.stats.map(pokemon => pokemon.base_stat),
        abilities: result.data.abilities.map(pokemon => pokemon.ability.name),
        moves: result.data.moves.map(pokemon => pokemon.move.name)

      });
  
    };

    fetchData();

  }, [pokemonIndex, input]);

  // console.log(search)
  // console.log(searchPokemon)

  // console.log(pokemonIndex)


  return(

    <div className='pokedex'>
      <PokeDex search={searchPokemon} pokemon={pokemonData} input={input} next={nextPokemon} previous={previousPokemon}/>
      <form>
          <input type='text' placeholder='search pokemon...' value={search} onChange={event => setSearch(event.target.value)}/>
      </form>

      
    </div>

  );
}

export default App;
