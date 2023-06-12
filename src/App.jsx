import React from "react"

import Navbar from "./components/Navbar"
import List from "./components/List"

import "./styling/App.css"

const App = () => {
    return(
        <div className="container">
            <Navbar/>
            <List/>
        </div>
    )
}

export default App