import { Button } from "modules/common/ui/Button"
import React from "react"

function CtaButton({ children, className, onClick = null, ...props }) {
    function clickHandler(e) {
        const form = document.getElementById("form")
        form.scrollIntoView({ behavior: "smooth" })
        onClick && onClick(e)
    }
    return (
        <Button className={className} props={props} onClick={clickHandler}>
            {children}
        </Button>
    )
}

export default CtaButton
