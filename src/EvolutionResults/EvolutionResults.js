import React from 'react'
// import Pokemon from '../pokemon/Pokemon';


function EvolutionResults(props) {
    return (
        <div>
            {props.evolutions.map((pokemon, i) => {
                return (<div key={i}>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>)
            })}

        </div>
    )


} export default EvolutionResults