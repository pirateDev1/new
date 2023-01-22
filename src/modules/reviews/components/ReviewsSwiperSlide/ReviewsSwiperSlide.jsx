import React from "react"
import styles from "./ReviewsSwiperSlide.module.css"

function ReviewsSwiperSlide({ data }) {
    const { img, name, description, review } = data
    return (
        <div className={styles.container}>
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
            <div className={styles.review}>
                <p
                    dangerouslySetInnerHTML={{
                        __html: review.replace(/\n/g, "<br />"),
                    }}
                />
            </div>
        </div>
    )
}

export default ReviewsSwiperSlide
