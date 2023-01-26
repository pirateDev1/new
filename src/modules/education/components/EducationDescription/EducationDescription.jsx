import React from "react"
import styles from "./EducationDescription.module.css"

import { CrossIconWithRotation } from "modules/common/ui/CrossIconWithRotation"
import { AnimatedDropdown } from "modules/common/ui/AnimatedDropdown"

export default function EducationDescription({ data, isSelected, onClick }) {
    const { lesson, title, desc } = data

    return (
        <li className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>
                    <span className="bold">{lesson}</span> {title}
                </p>

                <CrossIconWithRotation
                    isOpened={isSelected}
                    onClick={onClick}
                />
            </div>

            <AnimatedDropdown opened={isSelected}>
                <p className={styles.description}>{desc}</p>
            </AnimatedDropdown>
        </li>
    )
}
