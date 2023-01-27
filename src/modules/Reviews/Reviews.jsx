import React from "react"
import { ReviewsSwiper } from "./components/ReviewsSwiper"
import styles from "./Reviews.module.css"

function Reviews() {
    return (
        <div className={styles.wrapper} id="reviews">
            <div className={styles.container}>
                <h2 className={styles.title}>Что о нас говорят студенты?</h2>
                <ReviewsSwiper />
            </div>
            <div className={styles.wave}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={styles.shapeFill}
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default Reviews
