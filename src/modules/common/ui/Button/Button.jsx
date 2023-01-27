import React from "react"
import styles from "./Button.module.css"

export default function Button({ children, variant, className, ...props }) {
    let btnVar = "filled"

    switch (variant) {
        case "filled":
            btnVar = "filled"
            break
        case "outlined":
            btnVar = "outlined"
            break
        default:
            btnVar = "filled"
    }

    return (
        <button
            className={`${styles.btn} ${styles[btnVar]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
