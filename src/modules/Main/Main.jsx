import React from "react"
import styles from "./Main.module.css"
import headerImg from "assets/header-image-dark.png"
import { Button } from "modules/common/ui/Button"

function Main() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.topText}>Обучение ЦАБ</h3>
                <div className={styles.imgContainer}>
                    <img src={headerImg} alt="" />
                </div>
                <div className={styles.infoContainer}>
                    <p className={styles.middleText}>
                        Гибридное образование с практическим уклоном
                    </p>
                    <p className={styles.title}>
                        Обучаем цифровым профессиям будущего
                        <span>в сфере Web 3.0</span>
                    </p>
                    <div className={styles.license}>
                        <img
                            src="https://static.tildacdn.com/tild3666-6137-4266-a263-366661646262/smalllogo.svg"
                            alt=""
                        />
                        <p>Государственная образовательная лицензия</p>
                    </div>
                    <div className={styles.license}>
                        <img
                            src="https://static.tildacdn.com/tild3666-6137-4266-a263-366661646262/smalllogo.svg"
                            alt=""
                        />
                        <p>Государственная образовательная лицензия</p>
                    </div>
                </div>
                <Button>Записаться</Button>
            </div>
        </div>
    )
}

export default Main
