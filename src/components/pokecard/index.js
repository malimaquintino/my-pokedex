import React from 'react'
import './style.css'

function Pokecard({id, name, type, weakness, img}){
    let images = require.context('../../../public/imgs', true);
    let pokeImg = images(`./${id}.png`);
    return (
        <>
            <div className="pokemon-card-container">
                <div className="pokemon-card">
                    <div className="background">
                        <img className="image" src={pokeImg}/>
                    </div>

                    <div className="content">
                        <h1 className="pokemon-name">{name}</h1>
                        <span className="pokemon-type">Type</span>

                        <div className="pokemon-stats">
                            <p>Power: 100</p>
                            <p>Demage: 100</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Pokecard