import React from "react"

import {
    Switch,
    BrowserRouter as Router
} from "react-router-dom"
import Projects from "../pages/admin/Project"
import RouteToAdmin from "./RouteToAdmin"


export default function RouterIndex () {
    return <Router>
        <Switch>
            <RouteToAdmin path="/">
                <Projects />
            </RouteToAdmin>
        </Switch>
    </Router>
}