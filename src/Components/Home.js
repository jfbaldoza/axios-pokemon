import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/hello"}>Hello</Link></li>
                <li><Link to={"/4"}>4</Link></li>
                <li><Link to={"/pokemon"}>Pokemon</Link></li>
                <li><Link to={"/starwars"}>Starwars</Link></li>
            </ul>
        </div>
    )
}
