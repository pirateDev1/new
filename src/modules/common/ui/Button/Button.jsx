import React from "react"
import styles from "./Button.module.css"

export default function Button({ children, className, ...props }) {
    return (
        <button className={`${styles.btn} ${className}`} {...props}>
            {children}
        </button>
    )
}
