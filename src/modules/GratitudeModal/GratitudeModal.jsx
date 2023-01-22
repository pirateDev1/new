import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import React from "react"
import styles from "./GratitudeModal.module.css"
import { RxCross1 } from "react-icons/rx"

function GratitudeModal({ showGratitudeModal, setShowGratitudeModal }) {
    return (
        <AnimatedModal
            opened={showGratitudeModal}
            onClose={() => setShowGratitudeModal(false)}
            innerClassName={styles.container}
        >
            <RxCross1
                className={styles.close}
                onClick={() => setShowGratitudeModal(false)}
            />
            <p className={styles.info}>
                Ваша заявка принята! С Вами свяжутся в ближайшее время! <br />
                Спасибо за Ваше обоащение!
            </p>
        </AnimatedModal>
    )
}

export default GratitudeModal
