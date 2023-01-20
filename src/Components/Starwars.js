import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";

function Starwars() {
    const [characters, setCharacters] = useState({});
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        axios
        .get("https://swapi.dev/api/people/" + current)
        .then((res) => {
            setCharacters(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [current]);


    return (
        <div>
            <Home/>
            <hr/>
            <h1>StarWars Characters</h1>
            <p>Name: {characters.name}</p>
            <p>Gender: {characters.gender}</p>
            <p>Height: {characters.height}</p>
            <p>Birth Year: {characters.birth_year}</p>
            <div>
                <button onClick={() => setCurrent(current - 1)}>Previous</button>
                <button onClick={() => setCurrent(current + 1)}>Next</button>
            </div>
        </div>
    )
}

export default Starwars