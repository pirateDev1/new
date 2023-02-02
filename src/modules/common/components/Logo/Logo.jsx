import React from "react"
import styles from "./Logo.module.css"
import { logo } from "assets/pictures/common"

export default function Logo({ className, isDark }) {
    return (
        <div className={`${styles.logo} ${className}`}>
            {isDark ? <img src={logo} alt="" /> : <img src={logo} alt="" />}
            <h4 className={`${styles.text} ${isDark ? styles.darkText : ""}`}>
                Crypto Vision
            </h4>
        </div>
    )
}
