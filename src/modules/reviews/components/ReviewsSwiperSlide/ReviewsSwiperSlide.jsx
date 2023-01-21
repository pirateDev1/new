import React from "react"
import styles from "./ReviewsSwiperSlide.module.css"

function ReviewsSwiperSlide({ data }) {
    const { img, name, description } = data
    return (
        <div className={styles.container}>
            <div
                className={styles.slide}
                style={{
                    backgroundImage: `url(${img})`,
                }}
            ></div>
            <div className={styles.description}>
                <p>
                    <span>{name}</span> — {description}
                </p>
            </div>
        </div>
    )
}

export default ReviewsSwiperSlide
