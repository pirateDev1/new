import React from "react"
import styles from "./Main.module.css"
import { mainBg } from "assets/pictures/main"
import { Button } from "modules/common/ui/Button"
import { IconsSection } from "./components/IconsSection"

function Main() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3 className={styles.topText}>Обучение ЦАБ</h3>
                    <div className={styles.imgContainer}>
                        <img src={mainBg} alt="" />
                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.smallText}>
                            Гибридное образование с практическим уклоном
                        </p>
                        <h2 className={styles.mainText}>
                            Обучаем цифровым профессиям будущего
                            <span className={styles.accent}>
                                в сфере Web 3.0
                            </span>
                        </h2>
                        <IconsSection />
                    </div>
                </div>
                <Button className={styles.btn}>Записаться</Button>
            </div>
        </div>
    )
}

export default Main
