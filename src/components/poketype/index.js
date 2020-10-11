import React from 'react'
import * as S from './style'
import typesinfo from '../../data/types.json'

function Poketype({type}){
    let result = typesinfo.find( info => info.name === type)
    
    return(       
        <S.poketype bgcolor={result.bgcolor} fontcolor={result.fontcolor}>{result.name}</S.poketype>        
    );
}

export default Poketype