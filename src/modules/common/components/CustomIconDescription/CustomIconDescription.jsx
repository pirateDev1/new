import React from "react"
import styles from "./CustomIconDescription.module.css"
import { borderImg } from "assets/pictures/main"

function CustomIconDescription({
    text,
    img,
    wrapperClassName,
    textClassName,
    imgClassName,
}) {
    return (
        <div className={`${styles.container} ${wrapperClassName || ""}`}>
            <div className={styles.borderIcon}>
                <img src={borderImg} alt="" className={styles.border} />
                <img
                    src={img}
                    alt=""
                    className={`${styles.icon} ${imgClassName || ""}`}
                />
            </div>
            <p className={`${styles.text} ${textClassName || ""}`}>{text}</p>
        </div>
    )
}

export default CustomIconDescription
