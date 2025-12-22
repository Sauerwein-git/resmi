"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./tagBlock.module.css";
import ModalForm from "../../ModalForm/ModalForm";

export default function TagBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState(420);
  const [maxWidth, setMaxWidth] = useState(1546);
  const tagRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const el = tagRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const visibleFromTop = vh - rect.top;
        const progress = Math.max(
          0,
          Math.min(1, 1 - visibleFromTop / rect.height)
        );

        // fontSize: от 420 до 62.77
        setFontSize(420 - progress * (420 - 62.77));

        // maxWidth: от 1546 до 1520 при progress >= 0.5
        const targetMaxWidth = progress < 0.5 ? 1546 : 1520;
        setMaxWidth(targetMaxWidth);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div
            ref={tagRef}
            className={styles.tag}
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: 0.836,
              maxWidth: `${maxWidth}px`,
              transition:
                "font-size 0.12s cubic-bezier(0.2,0,0.2,1), max-width 0.12s cubic-bezier(0.2,0,0.2,1)",
            }}
            suppressHydrationWarning
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
                  width={40}
                  height={20}
                  style={{ marginLeft: "5px" }}
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
              width={75}
              height={70}
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
            >
              ×
            </button>
            <ModalForm onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
