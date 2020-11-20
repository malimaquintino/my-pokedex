import React, {useState} from 'react'
import * as S from './style'
import Poketype from '../poketype/'
import ReactCardFlip from 'react-card-flip'


function Pokecard({id, name, type, weakness, cardcolor, hp, attack, defense, sp_atk, sp_def, speed}){
    let images = require.context('../../../public/imgs', true);
    let pokeImg = images(`./${id}.png`);
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () =>{
        setIsFlipped(!isFlipped)
    }

    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <S.pokecontainer color1={cardcolor.border[0]} color2={cardcolor.border[1]}>                   
                    
                    <S.header>
                        <S.colleft>Nº{id}</S.colleft> 
                        <S.colmiddle><strong>{name}</strong></S.colmiddle>
                        <S.colright></S.colright>                        
                    </S.header>
                    
                    
                    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                        
                        <S.pokebackground color1={cardcolor.bg[0]} color2={cardcolor.bg[1]} onClick={handleClick}>
                            <S.pokeimage src={pokeImg}/>
                        </S.pokebackground>


                        <S.pokebackgroundback color1={cardcolor.bg[0]} color2={cardcolor.bg[1]} onClick={handleClick}>  

                            <S.pokestats>
                                <div className="row"><span className="ml-2"><strong>Type:</strong></span></div>
                                <div className="row">
                                    <div className="ml-2">
                                        {type.map((item, i)=> <Poketype key={i} type={item}/>)}
                                    </div>
                                </div>

                                <div className="row"><span className="ml-2"><strong>Weakness:</strong></span></div>
                                <div className="row">
                                    <div className="ml-2">
                                        {weakness.map((item, i)=> <Poketype key={i} type={item}/>)}
                                    </div>
                                </div>

                                <div className="row"><span className="ml-2"><strong>HP:</strong></span>{hp}</div>
                                <div className="row"><span className="ml-2"><strong>Attack:</strong></span>{attack}</div>
                                <div className="row"><span className="ml-2"><strong>Defense:</strong></span>{defense}</div>
                                <div className="row"><span className="ml-2"><strong>Sp. Atk:</strong></span>{sp_atk}</div>
                                <div className="row"><span className="ml-2"><strong>Sp. Def:</strong></span>{sp_def}</div>
                                <div className="row"><span className="ml-2"><strong>Speed:</strong></span>{speed}</div>
                            </S.pokestats>

                        </S.pokebackgroundback>
                        
                    </ReactCardFlip>


                </S.pokecontainer>
            </div>
        </>
    )
}

export default Pokecard