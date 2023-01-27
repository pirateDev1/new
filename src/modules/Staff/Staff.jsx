import { CtaButton } from "modules/common/components/CtaButton"
import React from "react"
import { StaffSwiper } from "./components/StaffSwiper"
import styles from "./Staff.module.css"

function Staff() {
    return (
        <div className={styles.wrapper} id="staff">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Преподаватели —{" "}
                    <span className="accent-primary">
                        ЭКСПЕРТЫ из МГИМО, МГУ, ВШЭ
                    </span>
                    , практики из крупных компаний
                </h2>
                <StaffSwiper />
                <CtaButton className={styles.btn}>Записаться</CtaButton>
            </div>
        </div>
    )
}

export default Staff
