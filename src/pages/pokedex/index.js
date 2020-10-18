import React, {useState} from 'react';

import datainfo from '../../data/datainfo.json'
import Pokecard from '../../components/pokecard'
import './style.css'

function Pokedex (){
    const [search, setSearch] = useState('')

    return (
        <>
            
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">Pokedex</span>
                </div>
            </nav>
            

            <div className="container">
                <div className="row mt-3">
                    <div className="col-12">
                        <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="Seach..."/>
                    </div>
                </div>
                <div className="row mt-3">
                    
                        { datainfo.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())).map((filteredPokemon,i) => (<Pokecard key={i}  {...filteredPokemon}/>) ) }                
                    
                </div>
            </div>
        </>
    );
}

export default Pokedex