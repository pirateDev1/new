import React from "react"
import styles from "./StaffSwiperSlide.module.css"

function StaffSwiperSlide({ data }) {
    const { name, description, img } = data
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

export default StaffSwiperSlide
