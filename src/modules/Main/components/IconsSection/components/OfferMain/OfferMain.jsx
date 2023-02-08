import React from "react"
import styles from "./OfferMain.module.css"

function OfferMain() {
    return (
        <p className={styles.text}>
            <span className={styles.price}>9499руб.</span>
            <br />
            <span className={styles.normalText}>Бесплатно до 28.02.2023</span>
        </p>
    )
}

export default OfferMain
