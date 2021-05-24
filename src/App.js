import React from "react";
import "./assets/style/index.sass";
import "./assets/icon/css/fontello.css";
import {BrowserRouter} from "react-router-dom";
import Routes from './router'
import {HeaderContainer} from "./container";

function App(props) {
    return (
        <BrowserRouter>
                <HeaderContainer />
                <Routes/>
        </BrowserRouter>
    );
}

export default App;
