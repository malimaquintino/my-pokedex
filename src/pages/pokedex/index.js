import React, {useState} from 'react';

import datainfo from '../../data/datainfo.json'
import Pokecard from '../../components/pokecard'
import './style.css'

function Pokedex (){
    const [search, setSearch] = useState('')

    return (
        <>
            <h1>Pokédex</h1>
            <div>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="main-container">
                { datainfo.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())).map((filteredPokemon,i) => (<Pokecard key={i}  {...filteredPokemon}/>) ) }                
            </div>
            
        </>
    );
}

export default Pokedex