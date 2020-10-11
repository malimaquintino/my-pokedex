import React from 'react'
import * as S from './style'
import Poketype from '../poketype/'


function Pokecard({id, name, type, weakness, cardcolor}){
    let images = require.context('../../../public/imgs', true);
    let pokeImg = images(`./${id}.png`);
    console.log(cardcolor.border[0]);
    console.log(cardcolor.border[1]);
    // <S.colright>{type.map((item, i)=> <Poketype type={item}/>)}</S.colright>
    return (
        <>
            <S.pokecontainer color1={cardcolor.border[0]} color2={cardcolor.border[1]}>
                
                <S.header>
                    <S.colleft>Nº{id}</S.colleft> 
                    <S.colmiddle><strong>{name}</strong></S.colmiddle>
                    <S.colright>{type.map((item, i)=> <Poketype type={item}/>)}</S.colright>
                    
                </S.header>
                
                <S.pokebackground color1={cardcolor.bg[0]} color2={cardcolor.bg[1]}>
                    <S.pokeimage src={pokeImg}/>
                </S.pokebackground>

                <S.pokecontent color1={cardcolor.info[0]} color2={cardcolor.info[1]}>  

                    <S.pokestats>
                        <p>Power: 100</p>
                        <p>Demage: 100</p>
                    </S.pokestats>

                </S.pokecontent>
            </S.pokecontainer>
        </>
    )
}

export default Pokecard