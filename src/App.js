import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'
import PokemonResults from './pokemonResults/PokemonResults';
import EvolutionResults from './EvolutionResults/EvolutionResults';

function App() {
  const [pokemon, setPokemon] = useState("")
  const [species, setSpecies] = useState("")
  const [flavor, setFlavor] = useState("")
  const [pokemonEvolutionData, setPokemonEvolutionData] = useState("")

  async function randomPokemon() {
    let randomNumber = (Math.floor(Math.random() * Math.floor(809)))
    try {
      if(randomNumber > 0 ){
      getPokemon(randomNumber)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function getPokemon(term) {
    try {
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${term}/`)
      const pokemon = response.data
      setPokemon(pokemon)
      getSpecies(term)
    } catch (error) {
      console.log(error)
    }
  }

  async function getSpecies(term) {
    try {
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${term}`)
      setSpecies(response.data)
      setFlavor(response.data.flavor_text_entries.filter(text => text.language.name === "en"))
      getEvolutions(response.data.evolution_chain.url)
    } catch (error) {
      console.log(error)
    }

  }

  async function getEvolutions(term) {
    try {
      
      const response = await Axios.get(term)

      let evoChain = [];
      let evoData = response.data.chain;

      do {
        let numberOfEvolutions = evoData["evolves_to"].length;

        if (numberOfEvolutions > 1) {
          for (let i = 1; i < numberOfEvolutions; i++) {
            evoChain.push({
              species_name: evoData.evolves_to[i].species.name,
            });
          }
        }

        evoChain.push({
          species_name: evoData.species.name,
        });

        evoData = evoData["evolves_to"][0];
      } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

      let evolutions = []
      let fulfilled = []
      let pokemonEvolutionData = []

      evoChain.forEach(element => {

        let evolution = Axios.get(`https://pokeapi.co/api/v2/pokemon/${element.species_name}`)
        evolutions.push(evolution)

      })

      await Axios.all(evolutions).then(
        (Axios.spread((...args) => {
          fulfilled.push(args)
          fulfilled[0].forEach(element => {
            pokemonEvolutionData.push(element.data)
          });
        })))
        setPokemonEvolutionData(pokemonEvolutionData)


    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={randomPokemon}>Get Random Pokemon</button>

        {pokemon && species &&(
        <div>

        <PokemonResults pokemon={pokemon} allFlavorText={flavor} evolutions={pokemonEvolutionData}/>

        {/* <button onClick={getEvolutions}>Get Evolutions</button> */}

        </div>)}

        <br></br>
        <br></br>

        {pokemon && species && flavor && pokemonEvolutionData.length > 1 && (
          <div>
            <h3>Evolutions</h3>
            <EvolutionResults evolutions={pokemonEvolutionData}/>
          </div>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
