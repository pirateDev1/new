import React, { useState } from "react"
import { ReviewHeader } from "../ReviewHeader"
import { ReviewModal } from "../ReviewModal"
import styles from "./ReviewsSwiperSlide.module.css"

function ReviewsSwiperSlide({ data }) {
    const [showReviewModal, setShowReviewModal] = useState(false)

    const { review } = data

    function clickHandler() {
        setShowReviewModal(true)
    }
    return (
        <>
            <ReviewModal
                data={data}
                showReviewModal={showReviewModal}
                setShowReviewModal={setShowReviewModal}
            />
            <div className={styles.container} onClick={clickHandler}>
                <ReviewHeader data={data} />
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
