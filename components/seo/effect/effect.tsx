import { useState } from "react";
import styles from "./effect.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/router";

// Данные для шагов
const steps = [
  {
    num: "01",
    title: (
      <>
        Анализ текущей
        <br /> ситуации
      </>
    ),
    text: (
      <>
        Оценка текущего положения в<br /> выдаче и анализ динамики
        <br /> органического трафика
      </>
    ),
  },
  {
    num: "02",
    title: (
      <>
        Первичный аудит
        <br /> сайта
      </>
    ),
    text: (
      <>
        Проверка технической части,
        <br /> оценка параметров самого
        <br /> сайта и домена
      </>
    ),
  },
  {
    num: "03",
    title: "Проверка эффективности контента",
    text: (
      <>
        Оцениваем уникальность контента,
        <br /> конверсии и юзабилити
      </>
    ),
  },
  {
    num: "04",
    title: (
      <>
        Оцениваем уникальность
        <br /> контента, конверсии и<br /> юзабилити
      </>
    ),
    text: (
      <>
        Анализ стратегии и контента
        <br /> конкурентов, чтобы выделить и использовать выигрышные решения
      </>
    ),
  },
  {
    num: "05",
    title: (
      <>
        Прогноз трафика
        <br /> и рекомендации{" "}
      </>
    ),
    text: (
      <>
        Выделим зоны роста и сформируем стратегию по достижению
        <br /> плановых показателей
      </>
    ),
  },
];

export default function Effect() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = steps.length;

  // === Состояния формы ===
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    if (!isAgreed) {
      alert("Пожалуйста, примите условия политики конфиденциальности.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgkjbjb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        setName("");
        setPhone("");
        setIsAgreed(false);
        router.push("/thanks");
      } else {
        alert("Ошибка отправки. Попробуйте позже.");
      }
    } catch (err) {
      console.error(err);
      alert("Не удалось отправить заявку. Проверьте соединение.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.miniTag}>Этапы работы</div>
          <div className={styles.upBox}>
            <div className={styles.left}>
              <div className={styles.tag}>Проводим аудит</div>
            </div>
            <div className={styles.right}></div>
          </div>

          <div className={styles.blog}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.blogBox} ${styles[`n${index + 1}`]}`}
              >
                <div className={styles.num}>{step.num}</div>
                <div className={styles.boxTag}>{step.title}</div>
                <div className={styles.textTag}>{step.text}</div>
              </div>
            ))}

            <form onSubmit={handleSubmit} className={styles.auditForm}>
              <div className={styles.formTag}>Получить бесплатный аудит</div>
              <div className={styles.inputs}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.name}
                  required
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.number}
                  required
                />
              </div>
              <div className={styles.affBut}>
                <div
                  className={`${styles.cube} ${isAgreed ? styles.checked : ""}`}
                  onClick={() => setIsAgreed(!isAgreed)}
                ></div>
                <div className={styles.polit}>
                  Я принимаю условия{" "}
                  <Link href="/context">политики конфиденциальности</Link>
                </div>
              </div>
              <button
                type="submit"
                disabled={!isAgreed || isLoading}
                className={`${styles.anchorBut} ${
                  (!isAgreed || isLoading) && styles.anchorButDisabled
                }`}
              >
                {isLoading ? (
                  "Отправка..."
                ) : (
                  <>
                    Оставить заявку [<span className="arrow">→</span>]
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={`${styles.background} ${styles.mob}`}>
        <div className={styles.section}>
          <div className={styles.etap}>Этапы работы</div>
          <div className={styles.invBlock}>
            <div className={styles.leftBlockInv}></div>
            <div className={styles.rightBlockInv}></div>
          </div>
          <div className={styles.tag}>Проводим аудит</div>

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

          <form onSubmit={handleSubmit} className={styles.auditForm}>
            <div className={styles.formTag}>Получить бесплатный аудит</div>
            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.name}
                required
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.number}
                required
              />
            </div>
            <div className={styles.affBut}>
              <div
                className={`${styles.cube} ${isAgreed ? styles.checked : ""}`}
                onClick={() => setIsAgreed(!isAgreed)}
              ></div>
              <div className={styles.polit}>
                Я принимаю условия <br />
                <Link href="/context">политики конфиденциальности</Link>
              </div>
            </div>
            <button
              type="submit"
              disabled={!isAgreed || isLoading}
              className={`${styles.anchorBut} ${
                (!isAgreed || isLoading) && styles.anchorButDisabled
              }`}
            >
              {isLoading ? (
                "Отправка..."
              ) : (
                <>
                  Оставить заявку [<span className="arrow">→</span>]
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
