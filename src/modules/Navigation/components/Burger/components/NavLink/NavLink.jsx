import React from "react"
import styles from "./NavLink.module.css"

function NavLink({ children, link, onClick }) {
    return (
        <li className={styles.item} onClick={onClick}>
            <a href={link}>{children}</a>
        </li>
    )
}

export default NavLink
