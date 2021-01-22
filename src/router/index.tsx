import React from "react"

import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom"
import App from "../App"


export default function RouterIndex () {
    return <Router>
        <Switch>
            <Route path="/">
                <App/>
            </Route>
        </Switch>
    </Router>
}