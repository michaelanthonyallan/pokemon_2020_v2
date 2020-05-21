import React, { useState, useEffect } from 'react'
import Pokemon from '../pokemon/Pokemon'

export default function PokemonResults(props) {
    const [types, setTypes] = useState("")
    const [img, setImg] = useState("");
    const [shinyImg, setShinyImg] = useState("")
    const [numberOfTypes, setNumberOfTypes] = useState("")

    function getImg() {
        if (props.pokemon.sprites) {
            setImg(props.pokemon.sprites.front_default)
            setShinyImg(props.pokemon.sprites.front_shiny)
        }
    }


    function getTypes() {
        let types = []
        if (props.pokemon.types) {
            props.pokemon.types.map(type => {
                return types.push(type.type.name)
            })

            setTypes(types.join(', '));
            setNumberOfTypes(types.length)
        }
        
    }

    useEffect(() => {
        getTypes()
        getImg()
    })


    return (
        <div className="PokemonResults">
            {img && types && <Pokemon pokemon={props.pokemon}
                types={types} numOfTypes={numberOfTypes} 
                img={img} shiny={shinyImg} text={props.allFlavorText}/>}
        </div>
    )
}