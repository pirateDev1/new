import React from "react"
import styles from "./BurgerIcon.module.css"

function BurgerIcon({ showBurger, setShowBurger }) {
    function clickHandler(e) {
        e.stopPropagation()
        setShowBurger(prev => !prev)
    }
    return (
        <div
            className={`${styles.container} ${
                showBurger ? styles.burgerOpen : ""
            }`}
        >
            <button
                className={styles.navToggle}
                aria-label="toggle navigation"
                onClick={clickHandler}
            >
                <span className={styles.hamburger}></span>
            </button>
        </div>
    )
}

export default BurgerIcon
