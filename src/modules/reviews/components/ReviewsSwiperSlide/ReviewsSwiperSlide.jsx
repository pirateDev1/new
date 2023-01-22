import React, { useState } from "react"
import { ReviewModal } from "../ReviewModal"
import styles from "./ReviewsSwiperSlide.module.css"

function ReviewsSwiperSlide({ data }) {
    const [showReviewModal, setShowReviewModal] = useState(false)

    const { img, name, description, review } = data

    function clickHandler() {
        setShowReviewModal(true)
    }
    return (
        <>
            <ReviewModal
                review={review}
                showReviewModal={showReviewModal}
                setShowReviewModal={setShowReviewModal}
            />
            <div className={styles.container} onClick={clickHandler}>
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
        </>
    )
}

export default ReviewsSwiperSlide
