import React from "react"
import styles from "./Navbar.module.css"
import { CtaButton } from "modules/common/components/CtaButton"
import { NavbarList } from "./components/NavbarList"

export default function Navbar() {
    return (
        <div className={styles.container}>
            <h3 className={styles.logo}>Обучение ЦАБ</h3>
            <NavbarList />
            <CtaButton className={styles.btn}>Заказать</CtaButton>
        </div>
    )
}
