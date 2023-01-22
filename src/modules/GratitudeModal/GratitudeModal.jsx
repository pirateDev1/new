import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import React from "react"
import styles from "./GratitudeModal.module.css"

function GratitudeModal({ showGratitudeModal, setShowGratitudeModal }) {
    return (
        <AnimatedModal
            opened={showGratitudeModal}
            onClose={() => setShowGratitudeModal(false)}
            innerClassName={styles.container}
        >
            <p className={styles.info}>
                Ваша заявка принята! С Вами свяжутся в ближайшее время! <br />
                Спасибо за Ваше обоащение!
            </p>
        </AnimatedModal>
    )
}

export default GratitudeModal
