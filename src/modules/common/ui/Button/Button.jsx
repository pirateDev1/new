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
        case "textBtn":
            btnVar = "textBtn"
            break
        default:
            btnVar = "filled"
    }

    return (
        <button
            className={`${styles.btn} ${styles[btnVar]} ${className}`}
            {...props}
        >
            <div className={styles.gradient}>
                {<p className={styles.text}>{children}</p>}
            </div>
            {children}
        </button>
    )
}
