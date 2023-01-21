import React from "react"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { StaffSwiperSlide } from "../StaffSwiperSlide"
import { staffData } from "./data"
import { SwiperNav } from "../SwiperNav"

import styles from "./StaffSwiper.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

function StaffSwiper() {
    return (
        <div className={styles.container}>
            <SwiperNav />
            <Swiper
                className={styles.swiper}
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                    nextEl: "#nextStaff",
                    prevEl: "#prevStaff",
                }}
            >
                {staffData.map(item => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <StaffSwiperSlide data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default StaffSwiper
