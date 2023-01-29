import React from "react"
import styles from "./OffersList.module.css"
import { CustomIconDescription } from "modules/common/components/CustomIconDescription"
import { offersList } from "./data"

function OffersList() {
    return (
        <ul className={styles.list}>
            {offersList.map(item => {
                const { id, text, img } = item
                return (
                    <CustomIconDescription
                        key={id}
                        text={text}
                        img={img}
                        wrapperClassName={styles[`wrapper${id}`]}
                        textClassName={styles.text}
                    />
                )
            })}
        </ul>
    )
}

export default OffersList
