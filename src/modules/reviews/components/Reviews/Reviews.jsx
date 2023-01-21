import React from "react"
import { ReviewsSwiper } from "../ReviewsSwiper"
import styles from "./Reviews.module.css"

function Reviews() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2>Что о нас говорят студенты?</h2>
            </div>
            <ReviewsSwiper />
        </div>
    )
}

export default Reviews
