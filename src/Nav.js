import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav(props) {

    const URL = "https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-18.jpg"

    const style = {
        color: "white"
      }

    return (
        <nav>
        <Link to="/"><img className="logo"  alt="" src={URL}/></Link>
            <ul className="nav-links">
                <Link style={style} to="/catchpokemon"><li>Catch'Em All</li></Link>
                <Link style={style} to="/login"><li>Login</li></Link>
                <Link style={style} to="/signup"><li>Sign Up</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;