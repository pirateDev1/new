import React from "react"
import styles from "./Main.module.css"
import { mainBg } from "assets/pictures/main"
import { IconsSection } from "./components/IconsSection"
import { CtaButton } from "modules/common/components/CtaButton"

function Main() {
    return (
        <div className={styles.wrapper} id="main">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.imgContainer}>
                        <img src={mainBg} alt="" />
                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.middleText}>
                            Гибридное образование с практическим уклоном
                        </p>
                        <h2 className={styles.title}>
                            Обучаем цифровым профессиям будущего
                            <br />
                            <span className="accent-secondary">
                                в сфере Web 3.0
                            </span>
                        </h2>
                        <IconsSection />
                    </div>
                    <CtaButton className={styles.btn}>Записаться</CtaButton>
                </div>
            </div>
        </div>
    )
}

export default Main
