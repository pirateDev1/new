import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.mainComp}>
                <p className={styles.companyName}>Crypto-School</p>
                <p className={styles.companyTel}>Моб.: +79872282828</p>
            </div>
            <p className={styles.companyEmail}>info@Crypto-School.ru</p>
            <p className={styles.idNumber}>ИП Глазов М.С., ИНН: 631214905156</p>
            <p className={styles.companyAdrs}>
                © ООО «ЦМТ ЦИФРОВАЯ АКАДЕМИЯ БУДУЩЕГО», Москва,
                Краснопресненская набережная 12, этаж 16, помещ. 1648В, ИНН:
                9703025541
            </p>
        </footer>
    );
}
