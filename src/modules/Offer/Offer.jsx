import React from "react"
import styles from "./Offer.module.css"
import { OffersList } from "./components/OffersList"

function Offer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>
                    Команда ЦАБ{" "}
                    <span className="accent-primary">предоставляет</span>:
                </h3>
                <OffersList />
            </div>
        </div>
    )
}

export default Offer
