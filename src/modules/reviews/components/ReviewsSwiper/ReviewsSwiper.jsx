import React from "react"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { reviewsData } from "./data"

import styles from "./ReviewsSwiper.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { ReviewsSwiperSlide } from "../ReviewsSwiperSlide"

function StaffSwiper() {
    return (
        <div className={styles.container}>
            <Swiper
                className={styles.swiper}
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
            >
                {reviewsData.map(item => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <ReviewsSwiperSlide data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default StaffSwiper
