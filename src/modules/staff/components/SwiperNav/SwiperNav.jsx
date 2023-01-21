import React from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import styles from "./SwiperNav.module.css"

function SwiperNav() {
    return (
        <div className={styles.container}>
            <BsChevronLeft id="prevStaff" />
            <BsChevronRight id="nextStaff" />
        </div>
    )
}

export default SwiperNav
