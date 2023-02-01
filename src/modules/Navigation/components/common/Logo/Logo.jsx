import React from "react"
import styles from "./Logo.module.css"
import { logo } from "assets/pictures/common"

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="" />
            <h4 className={styles.text}>Crypto Vision</h4>
        </div>
    )
}
