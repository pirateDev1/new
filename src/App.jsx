import React from "react"
import { Form } from "modules/Form"
import { Burger } from "modules/Burger"
import { Education } from "modules/Education"
import { Main } from "modules/Main"
import { Reviews } from "modules/Reviews"
import { Staff } from "modules/Staff"
import { Footer } from "modules/Footer"
import { Navbar } from "modules/Navbar"
function App() {
    return (
        <div>
            <Navbar />
            <Burger />
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
