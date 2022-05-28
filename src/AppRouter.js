import React, {
} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

//Pages
import BilliPage from './components/PagesComponents/BilliPage';

export default function AppRouter(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/billi">
                    <BilliPage />
                </Route>
                <Route path="/">
                    <BilliPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}