import React, { useState } from "react"
import styles from "./Education.module.css"
import { EducationDescription } from "./components/EducationDescription"
import { educationData } from "./data"
import { CtaButton } from "modules/common/components/CtaButton"

export default function Education() {
    const [selectedOption, setSelectedOption] = useState(0)

    return (
        <div className={styles.wrapper} id="education">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Программа обучения —{" "}
                    <span className={styles.accent}>5 дней</span>
                </h2>
                <ul className={styles.content}>
                    {educationData.map((item, index) => (
                        <EducationDescription
                            key={item.id}
                            data={item}
                            index={index}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                        />
                    ))}
                </ul>
                <CtaButton>Записаться</CtaButton>
            </div>
        </div>
    )
}
