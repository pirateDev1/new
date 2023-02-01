import React from "react"
import styles from "./Logo.module.css"
import { logoLight, logoDark } from "assets/pictures/common"

export default function Logo({ className, isDark }) {
    return (
        <div className={`${styles.logo} ${className}`}>
            {isDark ? (
                <img src={logoDark} alt="" />
            ) : (
                <img src={logoLight} alt="" />
            )}
            <h4 className={`${styles.text} ${isDark ? styles.darkText : ""}`}>
                Crypto Vision
            </h4>
        </div>
    )
}
