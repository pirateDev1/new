import React from "react"
import styles from "./OfferMain.module.css"

function OfferMain() {
  return (
    <p className={styles.text}>
      <span className={styles.price}>9499руб.</span>
      <br />
      Бесплатно до 28.02.2023
    </p>
  )
}

export default OfferMain
