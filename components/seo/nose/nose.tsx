import { useState } from "react";
import styles from "./nose.module.css";
import ModalForm from "../../ModalForm/ModalForm";

export default function Nose() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.tag}>
            Не только настроим SEO, а{" "}
            <span className="red">«засунем нос» в ваш бизнес</span>
          </div>
          <div className={styles.box}>
            <div className={styles.left}>
              <div className={styles.text}>
                Мы не настраиваем SEO просто ради трафика или запросов в ТОП.
                <span className="white">Нам важно развитие вашего бизнеса</span>
              </div>
              <div className={styles.textL}>
                Если мы видим возможности для улучшений, мы собираем мнения
                экспертов и презентуем вам решения: рекомендуем ассортимент,
                <span className="white">
                  даём советы по росту конверсии сайта
                </span>{" "}
                и даже по работе отдела продаж
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.textR}>
                Раз в месяц основатель агентства, серийный предприниматель с
                большим опытом, лично анализирует ситуацию в бизнесе каждого
                клиента и делится советами по оптимизации бизнес-процессов,
                которые могут сдерживать рост
              </div>
              <button
                type="button"
                className={styles.button}
                onClick={openModal}
              >
                Начать с бесплатного аудита [<span className="arrow">→</span>]
              </button>
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
