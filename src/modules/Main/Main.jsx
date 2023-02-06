import React from "react"
import styles from "./Main.module.css"
import { mainBg } from "assets/pictures/main"
import { IconsSection } from "./components/IconsSection"
import { CtaButton } from "modules/common/components/CtaButton"
import { Navigation } from "modules/Navigation"

function Main() {
    return (
        <div className={styles.wrapper} id="main">
            <div className={styles.container}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.imgContainer}>
                        <img src={mainBg} alt="" />
                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.middleText}>
                            Гибридное образование с практическим уклоном
                        </p>
                        <h2 className={styles.title}>
                            Онлайн обучение
                            <br />
                            по заработку
                            <br />
                            <span className="accent-secondary">
                                на криптовалюте
                            </span>
                        </h2>
                        <IconsSection />
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <CtaButton>Записаться бесплатно</CtaButton>
                </div>
            </div>
        </div>
    )
}

export default Main
