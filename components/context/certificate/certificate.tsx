import styles from "./certiicate.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Certificate() {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const certificates = [
    { src: "/img/cert1.png", full: "/img/cert1.png", alt: "Сертификат 1" },
    { src: "/img/cert2.png", full: "/img/cert2.png", alt: "Сертификат 2" },
    { src: "/img/cert3.png", full: "/img/cert3.png", alt: "Сертификат 3" },
  ];

  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.tag}>Сертификаты</div>
          <div className={styles.images}>
            {certificates.map((cert, index) => (
              <div key={index} className={styles.imageContent}>
                {visibleIndex === index && (
                  <a
                    href={cert.full}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.imageLink}
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={493}
                      height={313}
                      className={styles.navButton}
                    />
                  </a>
                )}
                <div
                  className={styles.text}
                  onClick={() =>
                    setVisibleIndex(visibleIndex === index ? null : index)
                  }
                >
                  Проверить подлинность [&nbsp;
                  <span className={styles.arrow}>→</span>&nbsp;]
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
