import React, { useState } from "react"
import { BurgerIcon } from "../BurgerIcon"
import { BurgerNav } from "../BurgerNav"
import styles from "./Burger.module.css"

function Burger() {
    const [showBurger, setShowBurger] = useState(false)
    return (
        <div className={styles.wrapper}>
            <BurgerIcon showBurger={showBurger} setShowBurger={setShowBurger} />
            <BurgerNav showBurger={showBurger} setShowBurger={setShowBurger} />
        </div>
    )
}

export default Burger
