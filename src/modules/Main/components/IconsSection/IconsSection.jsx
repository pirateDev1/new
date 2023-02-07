import React from "react"
import styles from "./IconsSection.module.css"
import { CustomIconDescription } from "modules/common/components/CustomIconDescription"
import { rubleImg, timeImg } from "assets/pictures/main"
import { OfferMain } from "./components/OfferMain"
import { DurationMain } from "./components/DurationMain"

function IconsSection() {
    return (
        <div className={styles.container}>
            <CustomIconDescription element={<OfferMain />} img={rubleImg} />
            <CustomIconDescription element={<DurationMain />} img={timeImg} />
        </div>
    )
}

export default IconsSection
