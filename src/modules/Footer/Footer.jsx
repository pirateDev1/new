import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.wrapper} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.logo}>Logo</p>
                    <p className={styles.name}>Crypto Vision</p>
                    <p className={styles.phone}>7 (928) 407-64-40</p>

                    <p className={styles.email}>info@cryptovision.ru</p>
                </div>
                <p className={styles.copyright}>
                    2018 - 2023 © cryptovision GmbH, Москва, Краснопресненская
                    набережная 10, этаж 11, помещ. 1648В
                </p>
            </div>
        </footer>
    )
}
