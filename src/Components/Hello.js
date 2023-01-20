import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HelloRed from './HelloRed';
function Hello() {
    return (
        <div>
            <Home/>
            <h1>Hello</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='blue/red' element={<HelloRed/>} />
                </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Hello