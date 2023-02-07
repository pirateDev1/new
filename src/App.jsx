import React from "react"
import { Main } from "modules/Main"
import { Education } from "modules/Education"
import { Staff } from "modules/Staff"
import { Reviews } from "modules/Reviews"
import { Form } from "modules/Form"
import { Footer } from "modules/Footer"
import { Offer } from "modules/Offer"

function App() {
    return (
        <div>
            {/*  <Main />
      <Education />
      <Staff />
      <Offer />
      */}
            <Reviews />
            <Form />
            <Footer />
        </div>
    )
}

export default App
