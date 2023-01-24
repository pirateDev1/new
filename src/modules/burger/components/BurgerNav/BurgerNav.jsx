import React from "react"
import { BurgerCta } from "../BurgerCta"
import { BurgerNavList } from "../BurgerNavList"
import styles from "./BurgerNav.module.css"

function BurgerNav({ showBurger, setShowBurger }) {
    function overlayClickHandler(e) {
        e.stopPropagation()
        setShowBurger(false)
    }

    function menuClickHandler(e) {
        e.stopPropagation()
    }

    return (
        <div
            className={`${styles.overlay} ${showBurger ? styles.navOpen : ""}`}
            onClick={overlayClickHandler}
        >
            <div className={styles.wrapper} onClick={menuClickHandler}>
                <div className={styles.container}>
                    <BurgerNavList setShowBurger={setShowBurger} />
                    <BurgerCta />
                </div>
            </div>
        </div>
    )
}

export default BurgerNav
