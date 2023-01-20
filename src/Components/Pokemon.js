import axios from 'axios'
import { useState, useEffect } from 'react'
import Home from './Home';

function Pokemon() {

    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then((res) => {
                setPokemonData(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
            console.log("Worked");
        }, []);

    return (
    <div>
        <Home/>
        <hr/>
        <h1>The Pokedex</h1>
        {
            pokemonData.map((element, i) => {
                return <p key={i}>{element.name}</p>
            })
        }
    </div>
    )
}

export default Pokemon