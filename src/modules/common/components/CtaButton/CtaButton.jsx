import { Button } from "modules/common/ui/Button"
import React from "react"

function CtaButton({ children, className, variant, onClick = null, ...props }) {
    function clickHandler(e) {
        document.querySelector("#form").scrollIntoView()
        document.querySelector("#nameInput").focus({ preventScroll: true })

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
