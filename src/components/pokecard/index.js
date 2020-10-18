import React from 'react'
import * as S from './style'
import Poketype from '../poketype/'


function Pokecard({id, name, type, weakness, cardcolor}){
    let images = require.context('../../../public/imgs', true);
    let pokeImg = images(`./${id}.png`);

    // <S.colright>{type.map((item, i)=> <Poketype type={item}/>)}</S.colright>
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <S.pokecontainer color1={cardcolor.border[0]} color2={cardcolor.border[1]}>
                    
                    <S.header>
                        <S.colleft>Nº{id}</S.colleft> 
                        <S.colmiddle><strong>{name}</strong></S.colmiddle>
                        <S.colright></S.colright>
                        
                    </S.header>
                    
                    <S.pokebackground color1={cardcolor.bg[0]} color2={cardcolor.bg[1]}>
                        <S.pokeimage src={pokeImg}/>
                    </S.pokebackground>

                    <S.pokecontent color1={cardcolor.info[0]} color2={cardcolor.info[1]}>  

                        <S.pokestats>
                            <div className="row"><span className="ml-2">Type:</span></div>
                            <div className="row">
                                <div className="ml-2">
                                    {type.map((item, i)=> <Poketype key={i} type={item}/>)}
                                </div>
                            </div>

                            <div className="row"><span className="ml-2">Weakness:</span></div>
                            <div className="row">
                                <div className="ml-2">
                                    {weakness.map((item, i)=> <Poketype key={i} type={item}/>)}
                                </div>
                            </div>
                        </S.pokestats>

                    </S.pokecontent>
                </S.pokecontainer>
            </div>
        </>
    )
}

export default Pokecard