import React from "react"
import styles from "./IconsSection.module.css"
import { CustomIconDescription } from "../CustomIconDescription"
import { rubleImg, timeImg } from "assets/pictures/main"

function IconsSection() {
    return (
        <div className={styles.container}>
            <CustomIconDescription
                text="Бесплатно до конца февраля"
                img={rubleImg}
            />
            <CustomIconDescription
                text="Длительность курса 7 дней"
                img={timeImg}
            />
        </div>
    )
}

export default IconsSection
