import React from "react"
import styles from "./ReviewHeader.module.css"

function ReviewHeader({ data }) {
    const { img, name, description } = data
    return (
        <div className={styles.header}>
            <div
                className={styles.avatar}
                style={{
                    backgroundImage: `url(${img})`,
                }}
            ></div>
            <div className={styles.info}>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ReviewHeader
