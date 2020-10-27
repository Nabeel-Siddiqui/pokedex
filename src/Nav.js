import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

    const style = {
        color: "white"
      }

    return (
        <nav>
        <Link to="/"><img className="logo"  alt="" src={"https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-18.jpg"}/></Link>
            <ul className="nav-links">
                <Link style={style} to="/catchpokemon"><li>Catch'Em All</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;