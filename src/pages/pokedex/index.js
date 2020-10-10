import React, {useState, useEffect} from 'react';

import datainfo from '../../data/datainfo.json'
import Pokecard from '../../components/pokecard'
import './style.css'

function Pokedex (){

    return (

        <>
            <h1>Pokédex</h1>
            <div className="container">
                { datainfo.map((item, i)=> <Pokecard key={i}  {...item}/>)}
            </div>
            
        </>
    );
}

export default Pokedex