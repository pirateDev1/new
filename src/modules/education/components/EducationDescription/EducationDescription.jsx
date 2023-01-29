import React from "react"
import styles from "./EducationDescription.module.css"

import { CrossIconWithRotation } from "modules/common/ui/CrossIconWithRotation"
import { AnimatedDropdown } from "modules/common/ui/AnimatedDropdown"
import { BrParagraph } from "modules/common/components/BrParagraph"
import { TypographyList } from "modules/common/components/TypographyList"
import { EducationDescriptionList } from "../EducationDescriptionList"

export default function EducationDescription({ data, isSelected, onClick }) {
    const { lesson, title, desc } = data

    return (
        <li className={styles.container}>
            <div className={styles.header} onClick={onClick}>
                <p className={styles.title}>
                    <span className="bold">{lesson}</span> {title}
                </p>

                <CrossIconWithRotation isOpened={isSelected} />
            </div>

            <AnimatedDropdown opened={isSelected}>
                <EducationDescriptionList data={desc} />
            </AnimatedDropdown>
        </li>
    )
}
