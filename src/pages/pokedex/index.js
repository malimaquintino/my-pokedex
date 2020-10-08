import React, {useState, useEffect} from 'react';

import datainfo from '../../data/datainfo.json'
import Pokecard from '../../components/pokecard'


function Pokedex (){

    return (

        <>
            <h1>Pokédex</h1>
            { datainfo.map((item, i)=> <Pokecard key={i}  {...item}/>)}
        </>
    );
}

export default Pokedex