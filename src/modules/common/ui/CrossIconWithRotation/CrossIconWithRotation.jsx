import React from "react"
import { RxCross1 } from "react-icons/rx"
import styles from "./CrossIconWithRotation.module.css"

function CrossIconWithRotation({
    isOpened,
    color,
    backgroundColor,
    size = 40,
    onClick,
}) {
    const openedStyles = isOpened ? styles.opened : ""
    const style = {
        color,
        backgroundColor,
        padding: size / 10,
    }

    return (
        <RxCross1
            className={`${styles.cross} ${openedStyles}`}
            size={size}
            style={style}
            onClick={onClick}
        />
    )
}

export default CrossIconWithRotation
