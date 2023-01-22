import { Main } from "modules/main/components/Main";
import { Reviews } from "modules/reviews/components/Reviews";
import { Staff } from "modules/staff/components/Staff";
import { Form } from "modules/form";
import React from "react";

function App() {
    return (
        <div>
            <Main />
            <Staff />
            <Reviews />
            <Form />
        </div>
    );
}

export default App;
