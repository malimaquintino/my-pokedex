import React from 'react'
import * as S from './style'

function Pokecard({id, name, type, weakness, cardcolor}){
    let images = require.context('../../../public/imgs', true);
    let pokeImg = images(`./${id}.png`);
    console.log(cardcolor.border[0]);
    console.log(cardcolor.border[1]);
    return (
        <>
            <S.pokecontainer color1={cardcolor.border[0]} color2={cardcolor.border[1]}>
                
                <S.pokebackground color1={cardcolor.bg[0]} color2={cardcolor.bg[1]}>
                    <S.pokeimage src={pokeImg}/>
                </S.pokebackground>

                <S.pokecontent color1={cardcolor.info[0]} color2={cardcolor.info[1]}>                    
                    {type.map((item, i)=> <S.poketype key={i}>{item}</S.poketype>)}
                    <S.pokename>{name}</S.pokename>
                    

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