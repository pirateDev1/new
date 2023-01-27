import React from "react"
import styles from "./NavbarLink.module.css"

export default function NavbarLink({ children, link }) {
    return (
        <p className={styles.item}>
            <a href={link}>{children}</a>
        </p>
    )
}
