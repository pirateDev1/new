import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { reviewsData } from "./data"

import styles from "./ReviewsSwiper.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { ReviewsSwiperSlide } from "../ReviewsSwiperSlide"
import { Pagination } from "swiper"

function StaffSwiper() {
    return (
        <div className={styles.container}>
            <Swiper
                style={{
                    "--swiper-pagination-color": "var(--primary-color)",
                    "--swiper-pagination-bullet-inactive-color": "gray",
                    "--swiper-pagination-bullet-inactive-opacity": "0.5",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "4px",
                }}
                modules={[Pagination]}
                className={styles.swiper}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    800: {
                        slidesPerView: 2,
                    },
                    1170: {
                        slidesPerView: 3,
                    },
                }}
                pagination={{ clickable: true }}
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
