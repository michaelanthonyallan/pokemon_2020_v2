import React, { useState } from 'react'
import './pokemon.css'


export default function Pokemon(props) {
    const [number, setFlavorTextNumber] = useState(0)
    const [shiny, setShine] = useState(true)

    let plural
    if(props.numOfTypes > 1){
        plural = true
    }

    function makeShiny(){
        if(shiny === true){
        setShine(false)
        } else{
            setShine(true)
        }
    }

    function changeFlavorText(){
        let numberOfText = (Math.floor(Math.random() * Math.floor(props.text.length)))
        setFlavorTextNumber(numberOfText)
    }



    return (
        <React.Fragment>

            
            
            <h2>Your pokemon is...</h2>
            <p className="capitalize">Name: {props.pokemon.name}</p>
            <p className="capitalize">{plural ? 'Types: ' : 'Type: '} {props.types}</p>
            

            <img src={shiny ? props.img : props.shiny} height="200" width="200" alt={props.pokemon.name} />
            <br></br>
            <br></br>

            <button onClick={makeShiny}>{shiny ? "Make Shiny" : "Make Normal"}</button>

            <p className="flavor-text">{props.text[`${number}`].flavor_text}</p>
            <p className="capitalize">pokemon {props.text[`${number}`].version.name}</p>
            

            <button onClick={changeFlavorText}>Change Flavor Text!</button>
            

        </React.Fragment>
    )
}