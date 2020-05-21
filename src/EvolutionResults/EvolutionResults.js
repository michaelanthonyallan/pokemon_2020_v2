import React from 'react'
// import Pokemon from '../pokemon/Pokemon';
import "./evolutionResults.css"


function EvolutionResults(props) {

    let evolutions = props.evolutions

    return (
        <div>
        {evolutions.length > 1 && (
        <div className="evo-results">
                {evolutions.map((pokemon, i) => {
                    return (<div className="evolution" key={i}>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>)
                })}
                </div>
        )}
        </div>
    )



} export default EvolutionResults