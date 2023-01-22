import React from "react"
import styles from "./BurgerIcon.module.css"

function BurgerIcon({ showBurger, setShowBurger }) {
    return (
        <div
            className={`${styles.container} ${
                showBurger ? styles.burgerOpen : ""
            }`}
        >
            <button
                className={styles.navToggle}
                aria-label="toggle navigation"
                onClick={() => setShowBurger(prev => !prev)}
            >
                <span className={styles.hamburger}></span>
            </button>
        </div>
    )
}

export default BurgerIcon
