import React from "react"
import styles from "./CustomLicense.module.css"
import customBorder from "assets/round-border-2.png"

function CustomLicense({ text }) {
    return (
        <div className={styles.license}>
            <div className={styles.borderIcon}>
                <img src={customBorder} alt="" className={styles.border} />
                <img
                    src="https://static.tildacdn.com/tild3666-6137-4266-a263-366661646262/smalllogo.svg"
                    alt=""
                    className={styles.icon}
                />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default CustomLicense
