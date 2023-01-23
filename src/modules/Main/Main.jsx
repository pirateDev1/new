import React from "react"
import styles from "./Main.module.css"
import headerImg from "assets/header-image-dark.png"
import { Button } from "modules/common/ui/Button"
import { CustomLicense } from "./components/CustomLicense"

function Main() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3 className={styles.topText}>Обучение ЦАБ</h3>
                    <div className={styles.imgContainer}>
                        <img src={headerImg} alt="" />
                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.smallText}>
                            Гибридное образование с практическим уклоном
                        </p>
                        <h2 className={styles.mainText}>
                            Обучаем цифровым профессиям будущего
                            <span>в сфере Web 3.0</span>
                        </h2>
                        {/* 
                    <CustomLicense text="Государственная образовательная лицензия" /> */}
                        <div className={styles.customIconsContainer}>
                            <CustomLicense text="Бесплатно до конца февраля" />
                            <CustomLicense text="Длительность курса 7 дней" />
                        </div>
                    </div>
                </div>
                <Button className={styles.btn}>Записаться</Button>
            </div>
        </div>
    )
}

export default Main
