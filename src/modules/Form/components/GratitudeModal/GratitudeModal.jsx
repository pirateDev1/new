import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import React from "react"
import styles from "./GratitudeModal.module.css"
import { RxCross1 } from "react-icons/rx"
import { AiOutlineCheckCircle } from "react-icons/ai"

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
            <AiOutlineCheckCircle className={styles.icon} />
            <p className={styles.info}>
                Ваша заявка принята!
                <br /> С Вами свяжутся в ближайшее время!
            </p>
        </AnimatedModal>
    )
}

export default GratitudeModal
