import React from "react"
import styles from "./CustomIconDescription.module.css"
import { borderImg } from "assets/pictures/main"

function CustomIconDescription({ text, img }) {
    return (
        <div className={styles.container}>
            <div className={styles.borderIcon}>
                <img src={borderImg} alt="" className={styles.border} />
                <img src={img} alt="" className={styles.icon} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default CustomIconDescription
