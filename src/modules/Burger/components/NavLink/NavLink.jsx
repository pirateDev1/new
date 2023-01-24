import React from "react"
import styles from "./NavLink.module.css"

function NavLink({ children, link, clickHandler }) {
    return (
        <li className={styles.item} onClick={clickHandler}>
            <a href={link}>{children}</a>
        </li>
    )
}

export default NavLink
