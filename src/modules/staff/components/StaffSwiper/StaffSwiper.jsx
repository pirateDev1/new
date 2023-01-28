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
                modules={[Navigation]}
                navigation={{
                    nextEl: "#nextStaff",
                    prevEl: "#prevStaff",
                }}
                slidesPerView={1}
                breakpoints={{
                    570: {
                        slidesPerView: 2,
                    },
                    870: {
                        slidesPerView: 3,
                    },
                    1170: {
                        slidesPerView: 4,
                    },
                    1470: {
                        slidesPerView: 5,
                    },
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
