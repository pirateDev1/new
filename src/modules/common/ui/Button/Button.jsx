import React from "react"
import styles from "./Button.module.css"

export default function Button({ children, variant, className, ...props }) {
    let btnStyle = "filled"

    switch (variant) {
        case "filled":
            btnStyle = "filled"
            break
        case "outlined":
            btnStyle = "outlined"
            break
        default:
            btnStyle = "filled"
    }

    return (
        <button className={`${styles[btnStyle]} ${className}`} {...props}>
            {children}
        </button>
    )
}
