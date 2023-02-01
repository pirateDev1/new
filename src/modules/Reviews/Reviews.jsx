import React from "react"
import { ReviewsSwiper } from "./components/ReviewsSwiper"
import styles from "./Reviews.module.css"
import { Waves } from "modules/common/components/Waves"

function Reviews() {
    return (
        <div className={styles.wrapper} id="reviews">
            <div className={styles.container}>
                <h2 className={styles.title}>Что о нас говорят студенты?</h2>
                <ReviewsSwiper />
            </div>
            <Waves />
        </div>
    )
}

export default Reviews
