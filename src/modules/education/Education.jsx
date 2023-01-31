import React from "react"
import styles from "./Education.module.css"
import { EducationList } from "./components/EducationList"
import { CtaButton } from "modules/common/components/CtaButton"

export default function Education() {
    return (
        <div className={styles.wrapper} id="education">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Программа обучения —{" "}
                    <span className="accent-primary">7 дней</span>
                </h2>
                <EducationList />
                <CtaButton className={styles.btn}>Записаться</CtaButton>
            </div>
        </div>
    )
}
