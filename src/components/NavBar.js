import React from 'react';
import '../styling/navbar.css';
import pokeball from '../images/pokeball.jpg'

function NavBar() {
    return (
        <nav>
            <h1>PokeDex</h1>
            <img className="logo" src={pokeball} width="90" height="90" alt="PokeDex"/>
        </nav>
    );
    
}

export default NavBar;