import React from "react"
import styles from "./EducationDescriptionList.module.css"
import { TypographyList } from "modules/common/components/TypographyList"

function EducationDescriptionList({ data }) {
    return (
        <>
            {data.map((item, index) => {
                const { subtitle, listItems } = item
                return (
                    <div key={index} className={styles.wrapper}>
                        <h4>{subtitle}</h4>
                        <TypographyList
                            data={listItems}
                            wrapperClassName={styles.typographyWrapper}
                            itemClassName={styles.typographyItem}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default EducationDescriptionList
