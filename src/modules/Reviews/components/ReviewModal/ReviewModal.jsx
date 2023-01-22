import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import React from "react"
import styles from "./ReviewModal.module.css"

function ReviewModal({ showReviewModal, setShowReviewModal }) {
    return (
        <AnimatedModal
            opened={showReviewModal}
            onClose={() => setShowReviewModal(false)}
            innerClassName={styles.container}
        >
            <p>ReviewModal</p>
        </AnimatedModal>
    )
}

export default ReviewModal
