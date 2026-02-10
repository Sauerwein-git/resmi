// components/TagBlock/TagBlock.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./tagBlock.module.css";
import ModalForm from "../../ModalForm/ModalForm";

type Metrics = {
  startScroll: number;
  endScroll: number;
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const MIN_SCALE = 62.77 / 420;

export default function TagBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logoRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMob = window.matchMedia("(max-width: 950px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMob || reduceMotion) return;

    const logo = logoRef.current;
    const placeholder = placeholderRef.current;
    if (!logo || !placeholder) return;

    let raf = 0;
    let m: Metrics | null = null;

    const apply = (p: number) => {
      const t = easeInOutCubic(clamp(p, 0, 1));
      const scale = 1 + (MIN_SCALE - 1) * t;
      logo.style.transform = `scale(${scale})`;
    };

    const measure = () => {
      logo.style.transform = "scale(1)";
      const rect = logo.getBoundingClientRect();
      placeholder.style.height = `${rect.height}px`;

      const phRect = placeholder.getBoundingClientRect();
      const placeholderDocTop = phRect.top + window.scrollY;

      const range = Math.max(380, Math.round(window.innerHeight * (- 0.45)));
      const startScroll = Math.max(0, placeholderDocTop - 40);
      const endScroll = startScroll + range;

      m = { startScroll, endScroll };
    };

    const render = () => {
      if (!m) return;
      const p = (window.scrollY - m.startScroll) / (m.endScroll - m.startScroll);
      apply(p);
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(render);
    };

    const onScroll = () => schedule();
    const onResize = () => {
      measure();
      schedule();
    };

    const start = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (document.fonts?.ready) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          await document.fonts.ready;
        }
      } catch {}

      measure();
      schedule();
    };

    start();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      logo.style.transform = "";
    };
  }, []);

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div ref={placeholderRef} className={styles.tagPlaceholder}>
            <div ref={logoRef} className={styles.tag} suppressHydrationWarning>
              RE SEARCH IT
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.leftBlock}>
              <div className={styles.textLeftBlock}>
                Маркетинговое агентство полного цикла: реализуем эффективные стратегии и{" "}
                <span className={styles.white}>помогаем бизнесу зарабатывать больше</span>{" "}
                с помощью оптимизации бизнес-процессов
              </div>
              <div className={styles.imageBlock}>
                <Image src="/img/hatter.png" alt="hatter" width={60} height={60} />
                <Image src="/img/flash.png" alt="flash" width={60} height={60} />
                <Image src="/img/target.png" alt="target" width={60} height={60} />
              </div>
            </div>

            <div className={styles.rightBlock}>
              <div className={styles.tagRightBlock}>
                Создаем и реализуем <span className={styles.red}>эффективные</span> стратегии для роста бизнеса{" "}
              </div>

              <button type="button" className={styles.button} onClick={openModal}>
                <div className={styles.textButton}>Начать с бесплатного аудита</div>
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
            Создаем и реализуем <span className={styles.red}>эффективные</span> стратегии для роста бизнеса{" "}
          </div>

          <div className={styles.textLeftBlock}>
            Маркетинговое агентство полного цикла: реализуем эффективные стратегии и{" "}
            <span className={styles.white}>помогаем бизнесу зарабатывать больше</span>{" "}
            с помощью оптимизации бизнес-процессов
          </div>

          <button type="button" className={styles.button} onClick={openModal}>
            Начать с бесплатного аудита
            <Image src="/img/cartArrow.png" alt="arrow" width={75} height={70} />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} style={{ zIndex: 2000 }} onClick={closeModal}>
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
