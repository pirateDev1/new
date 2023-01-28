import React from "react"
import { Form } from "modules/Form"
import { Education } from "modules/Education"
import { Main } from "modules/Main"
import { Reviews } from "modules/Reviews"
import { Staff } from "modules/Staff"
import { Footer } from "modules/Footer"

function App() {
    return (
        <div>
            <Main />
            <Education />
            <Staff />
            <Reviews />
            <Form />
            <Footer />
        </div>
    )
}

export default App
