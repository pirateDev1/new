import React, { useState } from "react"
import { EducationDescription } from "../EducationDescription"
import { educationData } from "./data"
import styles from "./EducationList.module.css"

function EducationList() {
    const [selectedOption, setSelectedOption] = useState(-1)

    function clickHandler(e, i) {
        e.stopPropagation()

        if (selectedOption === i) {
            setSelectedOption(-1)
        } else {
            setSelectedOption(i)
        }
    }

    return (
        <ul className={styles.content}>
            {educationData.map((item, index) => {
                const isSelected = index === selectedOption
                return (
                    <EducationDescription
                        key={item.id}
                        data={item}
                        index={index}
                        onClick={e => clickHandler(e, index)}
                        isSelected={isSelected}
                    />
                )
            })}
        </ul>
    )
}

export default EducationList
