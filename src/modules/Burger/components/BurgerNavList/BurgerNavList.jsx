import React from "react"
import styles from "./BurgerNavList.module.css"
import { NavLink } from "../NavLink"
import { menuItems } from "./data"

function BurgerNavList({ setShowBurger }) {
    function clickHandler() {
        setShowBurger(false)
    }
    return (
        <ul className={styles.list}>
            {menuItems.map(item => {
                return (
                    <NavLink
                        key={item.id}
                        link={item.link}
                        clickHandler={clickHandler}
                    >
                        {item.text}
                    </NavLink>
                )
            })}
        </ul>
    )
}

export default BurgerNavList
