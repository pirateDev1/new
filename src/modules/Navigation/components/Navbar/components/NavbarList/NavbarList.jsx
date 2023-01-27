import React from "react"
import styles from "./NavbarList.module.css"
import { NavbarLink } from "../NavbarLink"
import { menuItems } from "modules/Navigation/data"

export default function NavbarList() {
    return (
        <div className={styles.list}>
            {menuItems.map(item => {
                return (
                    <NavbarLink key={item.id} link={item.link}>
                        {item.text}
                    </NavbarLink>
                )
            })}
        </div>
    )
}
