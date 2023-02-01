import React, { useEffect, useState } from "react"
import { ANIMATION_TIME } from "./const"
import AnimateHeight from "react-animate-height"

function AnimatedDropdown({ children, opened }) {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (opened) {
            setHeight("auto")
        } else {
            setTimeout(() => {
                setHeight(0)
            }, 50)
        }
    }, [opened])

    return (
        <AnimateHeight
            height={height}
            duration={ANIMATION_TIME}
            style={{ flexShrink: 0 }}
        >
            {children}
        </AnimateHeight>
    )
}

export default AnimatedDropdown
