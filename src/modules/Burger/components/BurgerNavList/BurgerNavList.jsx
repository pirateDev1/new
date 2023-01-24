import React from "react"
import styles from "./BurgerNavList.module.css"
import { NavLink } from "../NavLink"
import { menuItems } from "./data"

function BurgerNavList({ closeClickHandler }) {
    return (
        <ul className={styles.list}>
            {menuItems.map(item => {
                return (
                    <NavLink
                        key={item.id}
                        link={item.link}
                        onClick={closeClickHandler}
                    >
                        {item.text}
                    </NavLink>
                )
            })}
        </ul>
    )
}

export default BurgerNavList
