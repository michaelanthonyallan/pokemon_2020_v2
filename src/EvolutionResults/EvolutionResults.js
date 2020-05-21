import React from 'react'
// import Pokemon from '../pokemon/Pokemon';
import "./evolutionResults.css"
import Evolution from '../Evolution/Evolution'


function EvolutionResults(props) {

    let evolutions = props.evolutions

    return (
        <div>
        {evolutions.length > 1 && (
        <div className="evo-results">
                {evolutions.map((pokemon, i) => {
                    return (<div className="evolution" key={i}>
                        <Evolution getPokemon={props.getPokemon} name={pokemon.name} img={pokemon.sprites.front_default}/>
                    </div>)
                })}
                </div>
        )}
        </div>
    )



} export default EvolutionResults