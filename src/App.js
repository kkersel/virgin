import React from 'react'
import MagicWand from "./magicWand/MagicWand";
// import './App.css'
import Ava from "./AVA/AVA";
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./MainPage/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Route path="/MainPage" render={() => <MainPage/> } />
            <Route path="/MagicWand" render={() => <MagicWand/>} />
            <Route path="/Ava" render={() => <Ava/>} />
        </BrowserRouter>
    );
}

export default App;
