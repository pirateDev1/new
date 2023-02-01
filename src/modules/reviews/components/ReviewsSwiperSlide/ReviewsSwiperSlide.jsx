import React, { useState } from "react"
import { ReviewHeader } from "../ReviewHeader"
import { ReviewModal } from "../ReviewModal"
import { BrParagraph } from "modules/common/components/BrParagraph"
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
                    <BrParagraph className={styles.paragraph}>
                        {review}
                    </BrParagraph>
                </div>
            </div>
        </>
    )
}

export default ReviewsSwiperSlide
