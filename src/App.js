import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import LoadingScreen from './components/LoadingScreen.js';
import CatchPokemon from './components/CatchPokemon.js';


import {useSelector, useDispatch} from 'react-redux'
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import {autoLogin} from './actions/userActions'



function App() {

  const userReducer = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(autoLogin())
  }, [])


  const URL = "https://pokeapi.co/api/v2/pokemon/";

  let pokemonID = 1;

  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState(pokemonID);
  const [searchPokemon, setSearchPokemon] = useState([]);
  const [search, setSearch] = useState("");

  let input = search;

  //nextPokemon and previousPokemon are created by adding or subtracting 1 from the current pokemonIndex, the pokemonIndex is the parameter that is used in the API

  function nextPokemon () {
    Math.min(setPokemonIndex(pokemonIndex + 1, 893))
  }

  function previousPokemon () {
    Math.max(setPokemonIndex(pokemonIndex - 1, 1));
  }

  function randomID() {
    return Math.floor(Math.random() * 893) + 1;
  }
  
  // There are two fetches being run, one that handles the next and previous pokemons and the other is based on search, the next and previous will fetch data based on the current pokemonIndex.
  // the second fetch is for the search input, the fetch will return data only if a correct pokemon is entered
  // there is an if else statement, this is used to determine if a pokemon is being searched for, if the search field is empty, the next/previous pokemon will show, if a pokemon name has been entered,
  // the pokemon searched for will show, both sets of data are placed as objects in an array

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

    <Router>
      <div className="App">
        <Nav/>
          <form>
            <input type='text' placeholder='search pokemon...' value={search} onChange={event => setSearch(event.target.value)}/>
          </form>
          {!userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {userReducer.user.username}</h1>}

          <Switch>
            <Route path="/" exact render={() => <LoadingScreen search={searchPokemon} pokemon={pokemonData} input={input} next={nextPokemon} previous={previousPokemon} random={randomID()}/>}/>
            <Route path="/catchpokemon" render={() => <CatchPokemon/>}/>
            <Route path="/signup" render={() => <SignUp/>}/>
            <Route path="/login" render={() => <Login/>}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App