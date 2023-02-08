import { Button } from "modules/common/ui/Button"
import React from "react"

function CtaButton({ children, className, variant, onClick = null, ...props }) {
    function clickHandler(e) {
        document.querySelector("#form").scrollIntoView({ behavior: "smooth" })
        onClick && onClick(e)
    }
    return (
        <Button
            variant={variant}
            className={className}
            props={props}
            onClick={clickHandler}
        >
            {children}
        </Button>
    )
}

export default CtaButton
