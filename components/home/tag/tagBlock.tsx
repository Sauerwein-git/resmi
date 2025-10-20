"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./tagBlock.module.css";
import ModalForm from "../../ModalForm/ModalForm";

export default function TagBlock() {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 300;
  const minScale = 0.4;
  const scale = Math.max(
    minScale,
    1 - (scrollY / maxScroll) * (1.5 - minScale)
  );

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div
            className={styles.tag}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "left bottom",
              transition: "transform 0.1s ease-out",
              willChange: "transform",
            }}
          >
            RE SEARCH IT
          </div>

          <div className={styles.block}>
            <div className={styles.leftBlock}>
              <div className={styles.textLeftBlock}>
                Маркетинговое агентство полного цикла: реализуем эффективные
                стратегии и{" "}
                <span className={styles.white}>
                  помогаем бизнесу зарабатывать больше
                </span>{" "}
                с помощью оптимизации бизнес-процессов
              </div>
              <div className={styles.imageBlock}>
                <Image
                  src="/img/hatter.png"
                  alt="hatter"
                  width={60}
                  height={60}
                />
                <Image
                  src="/img/flash.png"
                  alt="flash"
                  width={60}
                  height={60}
                />
                <Image
                  src="/img/target.png"
                  alt="target"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.tagRightBlock}>
                Создаем и реализуем{" "}
                <span className={styles.red}>эффективные</span> стратегии для
                роста бизнеса{" "}
              </div>
              <button
                type="button"
                className={styles.button}
                onClick={openModal}
              >
                <div className={styles.textButton}>
                  Начать с бесплатного аудита
                </div>
                <Image
                  src="/img/cartArrow.png"
                  alt="arrow"
                  width={45}
                  height={23}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.background} ${styles.mob}`}>
        <div className={styles.section}>
          <div className={styles.tag}>RE SEARCH IT</div>
          <div className={styles.imageBlock}>
            <Image src="/img/hatter.png" alt="hatter" width={35} height={35} />
            <Image src="/img/flash.png" alt="flash" width={35} height={35} />
            <Image src="/img/target.png" alt="target" width={35} height={35} />
          </div>
          <div className={styles.tagRightBlock}>
            Создаем и реализуем <span className={styles.red}>эффективные</span>{" "}
            стратегии для роста бизнеса{" "}
          </div>
          <div className={styles.textLeftBlock}>
            Маркетинговое агентство полного цикла: реализуем эффективные
            стратегии и{" "}
            <span className={styles.white}>
              помогаем бизнесу зарабатывать больше
            </span>{" "}
            с помощью оптимизации бизнес-процессов
          </div>
          <button type="button" className={styles.button} onClick={openModal}>
            Начать с бесплатного аудита
            <Image
              src="/img/cartArrow.png"
              alt="arrow"
              width={25}
              height={30}
            />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          style={{ zIndex: 2000 }}
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            style={{
              zIndex: 2001,
              background: "rgba(64, 72, 80, 1)",
              borderRadius: "12px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "24px",
                color: "white",
                cursor: "pointer",
              }}
            ></button>
            <ModalForm onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
