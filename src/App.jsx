import { Burger } from "modules/burger/components/Burger"
import { Main } from "modules/main/components/Main"
import { Reviews } from "modules/reviews/components/Reviews"
import { Staff } from "modules/staff/components/Staff"
import React from "react"

function App() {
    return (
        <div>
            <Burger />
            <Main />
            <Staff />
            <Reviews />
        </div>
    )
}

export default App
