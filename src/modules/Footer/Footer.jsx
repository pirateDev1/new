import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.wrapper} id="footer">
            <div className={styles.mainComp}>
                <p className={styles.name}>Crypto-School</p>
                <p className={styles.phone}>7 (987) 228-28-28</p>
            </div>
            <p className={styles.email}>info@crypto.ru</p>
            <p className={styles.idNumber}>ИП Глазов М.С., ИНН: 631214905156</p>
            <p className={styles.adrs}>
                © ООО «ЦМТ ЦИФРОВАЯ АКАДЕМИЯ БУДУЩЕГО», Москва,
                Краснопресненская набережная 12, этаж 16, помещ. 1648В, ИНН:
                9703025541
            </p>
        </footer>
    )
}
