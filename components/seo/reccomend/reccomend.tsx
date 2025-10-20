import { useState } from "react";
import styles from "./reccomend.module.css";
import ModalForm from "../../ModalForm/ModalForm";

export default function Reccomend() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.tag}>Кто будет выполнять рекомендации?</div>
          <div className={styles.smallText}>Как договоримся</div>
          <div className={styles.box}>
            <div className={styles.left}>
              <div className={styles.textBox} style={{ maxWidth: "730px" }}>
                Если в штате есть разработчики и специалисты,{" "}
                <br className="pc" />
                которые могут подготовить контент и внести необходимые изменения
                по нашему ТЗ, вы можете выполнить задачу самостоятельно,
                <span className="white6">
                  сэкономить средства и ускорить процесс
                </span>{" "}
                благодаря погруженности вашей команды в нюансы текущей площадки.
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.textBox} style={{ maxWidth: "643px" }}>
                Если такой возможности нет,{" "}
                <span className="white6">
                  <br className="mob" />
                  все работы возьмём на себя.
                  <br className="mob" />
                </span>{" "}
                На этапе аудита мы расскажем <br className="mob" />о предстоящих
                задачах и предоставим прозрачный расчёт стоимости.
              </div>
              <div
                className={styles.textBox}
                style={{ maxWidth: "643px", marginTop: "20px" }}
              >
                Вы{" "}
                <span className="white6">
                  сразу получите результат <br className="mob" />
                  без необходимости тратить время
                </span>{" "}
                на контроль команды.
              </div>
            </div>
          </div>
          <button type="button" className={styles.button} onClick={openModal}>
            Начать с бесплатного аудита [<span className={styles.arrow}>→</span>
            ]
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <span className={styles.modalClose} onClick={closeModal}></span>
            <ModalForm onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
