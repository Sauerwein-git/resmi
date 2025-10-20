import { useState } from "react";
import styles from "./setting.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ModalForm from "../../ModalForm/ModalForm";

const steps = [
  {
    num: "01",
    title: (
      <>
        Настройка аналитики
        <br /> и создание единого отчета
      </>
    ),
    text: "Чтобы наша работа была прозрачной и данные для принятия решений были всегда “под рукой”",
  },
  {
    num: "02",
    title: (
      <>
        Анализ ключевых слов и<br /> проработка плана действий
      </>
    ),
    text: "Подбираем ключевые слова, оцениваем спрос и формируем план действий",
  },
  {
    num: "03",
    title: (
      <>
        Внутренняя
        <br /> оптимизация
      </>
    ),
    text: "Устраняем технические ошибки, проверяем соответствие требованиям поисковиков, корректируем текущий контент и создаем новый, учитывая ЦА",
  },
  {
    num: "04",
    title: (
      <>
        Улучшаем эффективность страниц
        <br /> и подключаем дополнительные
        <br /> методы
      </>
    ),
    text: "Оцениваем поведение аудитории, собираем гипотезы по повышению конверсий и реализовываем стратегию по достижению плановых показателей",
  },
  {
    num: "05",
    title: "Регулярная отчетность",
    text: "Ежемесячно предоставляем отчет по трафику, ключевым словам, по позициям, выполненные работы и план на следующий период",
  },
];

export default function Setting() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = steps.length;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.upBox}>
            <div className={styles.tag}>
              После реализуем <span className="red">стратегию</span>
            </div>
            <button type="button" className={styles.button} onClick={openModal}>
              Начать с бесплатного аудита [&nbsp;
              <span className={styles.arrow}>→</span>&nbsp;]
            </button>
          </div>
          <div className={styles.botBox}>
            {steps.map((step, index) => (
              <div className={styles.contBox} key={index}>
                <div className={styles.leftCont}>
                  <div className={styles.num}>{step.num}</div>
                  <div className={styles.title}>{step.title}</div>
                </div>
                <div className={styles.rightCont}>
                  <div className={styles.text}>{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.background} ${styles.mob}`}>
        <div className={styles.section}>
          <div className={styles.tag}>Дальше – настройка кампаний</div>
          <button type="button" className={styles.button} onClick={openModal}>
            Начать с бесплатного аудита [&nbsp;
            <span className={styles.arrow}>→</span>&nbsp;]
          </button>
          <div className={styles.invBlock}>
            <div className={styles.leftBlockInv}></div>
            <div className={styles.rightBlockInv}></div>
          </div>

          <div className={styles.blogMobile}>
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className={styles.swiperMobile}
            >
              {steps.map((step, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.blogBox}>
                    <div className={styles.num}>{step.num}</div>
                    <div className={styles.boxTag}>{step.title}</div>
                    <div className={styles.textTag}>{step.text}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={styles.customProgress}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${((activeIndex + 1) / totalSlides) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <span className={styles.modalClose} onClick={closeModal}>
              ×
            </span>
            <ModalForm onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
