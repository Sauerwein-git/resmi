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
    question: "Вы работаете на своих аккаунтах или на моих?",
    answer:
      "Мы ведем кампании на аккаунтах агентства. В договоре фиксируем, что все кампании – собственность клиента. Если вы решаете приостановить сотрудничество, мы без доплаты передаем вам доступы к аккаунту или переносим их на ваш аккаунт.",
  },
  {
    question: "Вы даете гарантии?",
    answer:
      "С новыми клиентам мы начинаем работать по 100% предоплате. После сбора первичной статистики можем переходить на работу с оплатой за результат — по KPI.",
  },

  {
    question: "Вы работаете с НДС?",
    answer:
      "Да, мы, как рекламное агентство, работаем с НДС в рекламных бюджетах, и делаем закрывающие документы на основе счетов-фактур, выставленных сервисами. ",
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
