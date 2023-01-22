import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import React from "react"
import { ReviewHeader } from "../ReviewHeader"
import styles from "./ReviewModal.module.css"
import { RxCross1 } from "react-icons/rx"

function ReviewModal({ showReviewModal, setShowReviewModal, data }) {
    return (
        <AnimatedModal
            opened={showReviewModal}
            onClose={() => setShowReviewModal(false)}
            innerClassName={styles.container}
        >
            <RxCross1
                className={styles.close}
                onClick={() => setShowReviewModal(false)}
            />
            <div className={styles.content}>
                <ReviewHeader data={data} />
                <div className={styles.review}>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data.review.replace(/\n/g, "<br />"),
                        }}
                    />
                </div>
            </div>
        </AnimatedModal>
    )
}

export default ReviewModal
