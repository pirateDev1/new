import React from "react"
import { BurgerCta } from "../BurgerCta"
import styles from "./BurgerNav.module.css"

function BurgerNav({ showBurger, setShowBurger }) {
    function clickHandler(e) {
        e.stopPropagation()
        setShowBurger(false)
    }

    return (
        <div
            className={`${styles.overlay} ${showBurger ? styles.navOpen : ""}`}
            onClick={clickHandler}
        >
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <ul className={styles.list}>
                        <li className={styles.item}>Main</li>
                        <li className={styles.item}>About</li>
                        <li className={styles.item}>Contacts</li>
                        <li className={styles.item}>Reviews</li>
                    </ul>
                    <BurgerCta />
                </div>
            </div>
        </div>
    )
}

export default BurgerNav
