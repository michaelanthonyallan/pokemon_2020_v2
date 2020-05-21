import React from 'react'
import './Evolution.css'

export default function Evolution(props) {


    function getPokemon(name){
        props.getPokemon(name)
    }

    return (
        <div className="evolution">
            <h4 className="capitalize">{props.name}</h4>
            <p>{props.id}</p>
            <img src={props.img} alt={props.name} />
            <br></br>
            <br></br>
            <button onClick={() => getPokemon(props.name)} >View Pokemon</button>
        </div>

    )
}