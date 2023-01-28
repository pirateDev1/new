import React from "react"
import styles from "./Navbar.module.css"
import { CtaButton } from "modules/common/components/CtaButton"
import { NavigationList } from "../common"

export default function Navbar() {
    return (
        <div className={styles.container}>
            <h3 className={styles.logo}>Обучение ЦАБ</h3>
            <NavigationList />
            <CtaButton className={styles.btn}>Заказать</CtaButton>
        </div>
    )
}
