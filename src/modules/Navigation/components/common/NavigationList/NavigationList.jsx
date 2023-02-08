import React from "react"
import styles from "./NavigationList.module.css"
import { NavigationLink } from "../NavigationLink"
import { menuItems } from "../data"

function BurgerNavList({ closeClickHandler }) {
  return (
    <ul className={styles.list}>
      {menuItems.map(item => {
        return (
          <NavigationLink
            key={item.id}
            link={item.link}
            onClick={closeClickHandler}
          >
            {item.text}
          </NavigationLink>
        )
      })}
    </ul>
  )
}

export default BurgerNavList
