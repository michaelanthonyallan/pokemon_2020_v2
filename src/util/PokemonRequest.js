const axios = require('axios');

export default async function getPokemon(term){
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}/`);
        console.log(response.data)
    } catch (error){
        console.log(error)
    }
}