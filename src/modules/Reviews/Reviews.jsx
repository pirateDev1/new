import React from "react"
import { ReviewsSwiper } from "./components/ReviewsSwiper"
import styles from "./Reviews.module.css"

function Reviews() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>Что о нас говорят студенты?</h2>
                <ReviewsSwiper />
            </div>
        </div>
    )
}

export default Reviews
