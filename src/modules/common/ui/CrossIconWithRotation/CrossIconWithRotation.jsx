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
    const style = { width: size, height: size, color, backgroundColor }

    return (
        <div
            className={`${styles.container} ${openedStyles}`}
            onClick={onClick}
            style={style}
        >
            <RxCross1
                className={`${styles.cross} ${openedStyles}`}
                style={{ ...styles, fontSize: size ? size * 0.7 : null }}
            />
        </div>
    )
}

export default CrossIconWithRotation
