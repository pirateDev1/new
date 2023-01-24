import React from "react"
import { StaffSwiper } from "./components/StaffSwiper"
import styles from "./Staff.module.css"

function Staff() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.title}>
                    Преподаватели — <span>ЭКСПЕРТЫ из МГИМО, МГУ, ВШЭ</span>,
                    практики из крупных компаний
                </p>
                <StaffSwiper />
            </div>
        </div>
    )
}

export default Staff
