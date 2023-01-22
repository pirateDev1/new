import { Form } from "modules/Form"
import { Burger } from "modules/Burger"
import { Education } from "modules/education"
import { Main } from "modules/Main"
import { Reviews } from "modules/Reviews"
import { Staff } from "modules/Staff"
import React from "react"

function App() {
    return (
        <div>
            <Burger />
            <Main />
            <Education />
            <Staff />
            <Reviews />
            <Form />
        </div>
    )
}

export default App
