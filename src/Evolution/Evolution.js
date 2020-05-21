import React from 'react'

export default function Evolution(props) {


    function getPokemon(name){
        props.getPokemon(name)
    }

    return (
        <div className="evolution">
            <h4 className="capitalize">{props.name}</h4>
            <p>{props.id}</p>
            <img onClick={() => getPokemon(props.name)}src={props.img} alt={props.name} />
        </div>

    )
}