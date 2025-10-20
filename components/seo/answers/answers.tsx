import styles from "./answers.module.css";
import Image from "next/image";
import { useState } from "react";

const faqItems = [
  {
    question: "Как скоро я увижу результат?",
    answer:
      "Как правило, первые изменения вы увидите уже в течение месяца после запуска. Более точный прогноз мы предоставим после проведения аудита.",
  },
  {
    question: "С кем НЕ работаете?",
    answer:
      "Если на товар или услугу нет спроса или если ваш бизнес относится к нелегальным или полу-легальным.",
  },
  {
    question: "Вы даете гарантии?",
    answer:
      "Да, мы можем переходить на работу с оплатой за результат — по KPI.",
  },

  {
    question: "Конкурирую с маркетплейсам в выдаче - беретесь?",
    answer:
      "Да, приходите на бесплатный аудит и мы расскажем, как будем действовать.",
  },
];

export default function Answers() {
  const [openStates, setOpenStates] = useState(faqItems.map(() => false));

  const toggleAccordion = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.box}>
            <div className={styles.left}>
              <div className={styles.tag}>Ответы на частые вопросы</div>
            </div>
            <div className={styles.right}>
              {faqItems.map((item, index) => (
                <div className={styles.akkord} key={index}>
                  <div
                    className={styles.akUp}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className={styles.akTag}>{item.question}</div>
                    <div className={styles.akImg}>
                      <Image
                        src="/img/plus.png"
                        alt="Раскрыть/Свернуть"
                        width={20}
                        height={20}
                        className={`${styles.navButton} ${
                          openStates[index] ? styles.rotated : ""
                        }`}
                      />
                    </div>
                  </div>

                  {openStates[index] && (
                    <div className={styles.akText}>{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
