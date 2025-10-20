import "swiper/css";
import styles from "./partners.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnerCompanies } from "./companyName";

export default function Partners() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.section}>
          <div className={`${styles.mob} ${styles.order}`}>
            <div className={styles.smallTag}>Партнеры</div>
            <div className={styles.invBlock}>
              <div className={styles.leftBlockInv}></div>
              <div className={styles.rightBlockInv}></div>
            </div>
            <div className={styles.block}>
              <div className={styles.leftBlock}>наши Партнеры</div>
              <div className={styles.rightBlock}>
                Одними из первых узнаем о новом функционале, а где то получаем
                доступ к бета-тестированию
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={true}
            loop={true}
            centeredSlides={false}
            touchRatio={1}
            className={styles.partnerSwiper}
            noSwiping={false}
            grabCursor={true}
            simulateTouch={true}
            resistance={true}
            resistanceRatio={0.85}
          >
            {partnerCompanies.map((company) => (
              <SwiperSlide key={company} className={styles.swiperSlide}>
                <div className={styles.blockSwiper}>{company}</div>
              </SwiperSlide>
            ))}
            {partnerCompanies.map((company) => (
              <SwiperSlide
                key={`${company}-clone`}
                className={styles.swiperSlide}
              >
                <div className={styles.blockSwiper}>{company}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
