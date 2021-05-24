import React from "react"
import { Switch, Route } from "react-router-dom"
import { DonationPage } from "../components/index.js"
import LogPageContainer from "../components/LoginPage/LogPageContainer";
import SingUpPageContainer from "../components/SingUpPage/SingUpPageContainer";
import MainContainer from "../container/MainContainer";

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/main"> <MainContainer /> </Route>
            <Route path="/login"> <LogPageContainer /></Route>
            <Route path="/singIn"> <SingUpPageContainer /></Route>
            <Route path="/donation"> <DonationPage /></Route>
            <Route path="/"> <MainContainer  /></Route>
        </Switch>
    )
};

export default Routes
