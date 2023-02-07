import React from "react"
import styles from "./IconsSection.module.css"
import { CustomIconDescription } from "modules/common/components/CustomIconDescription"
import { rubleImg, timeImg } from "assets/pictures/main"
<<<<<<< Updated upstream

function IconsSection() {
  return (
    <div className={styles.container}>
      <CustomIconDescription text="Бесплатно до конца февраля" img={rubleImg} />
      <CustomIconDescription text="Длительность курса 7 дней" img={timeImg} />
    </div>
  )
=======
import { OfferMain } from "./components/OfferMain"
import { DurationMain } from "./components/DurationMain"

function IconsSection() {
    return (
        <div className={styles.container}>
            <CustomIconDescription element={<OfferMain />} img={rubleImg} />
            <CustomIconDescription element={<DurationMain />} img={timeImg} />
        </div>
    )
>>>>>>> Stashed changes
}

export default IconsSection
