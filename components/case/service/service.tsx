import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./service.module.css";

export default function ServiceCase() {
  return (
    <>
      <div className={` ${styles.background} `}>
        <div className={styles.section}>
          <div className={styles.tag}>Выберите услугу</div>
          <div className={styles.smallBox}>
            <div className={styles.graybox}>
              <div className={styles.textSB}>
                Контекстная
                <br /> реклама в Я.Директ{" "}
              </div>
              <div className={styles.imagebox}>
                <Image
                  src="/img/yandexDirect.png"
                  alt="Alexandr"
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <div className={styles.blackbox}>
              <div className={styles.textSB}>
                SEO-продвижение <br />в Яндекс и Google
              </div>
              <div className={styles.imagebox}>
                <Image
                  src="/img/yandex.png"
                  alt="Alexandr"
                  width={70}
                  height={70}
                />
                <Image
                  src="/img/google.png"
                  alt="Alexandr"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.tag} ${styles.mt}`}>Выберите тематику</div>
          <div className={styles.bigBox}>
            <div className={`${styles.boxBB} ${styles.gray}`}>
              <div className={styles.tagBB}>Логистика</div>
              <Image
                src="/img/ship.png"
                alt="Alexandr"
                width={34}
                height={32}
                className={styles.iconBB}
              />
            </div>
            <div className={`${styles.boxBB} ${styles.semiBlack}`}>
              <div className={styles.tagBB}>b2b</div>
              <Image
                src="/img/bag.png"
                alt="Alexandr"
                width={34}
                height={32}
                className={styles.iconBB}
              />
            </div>
            <div className={`${styles.boxBB} ${styles.gray}`}>
              <div className={styles.tagBB}>Мода</div>
              <Image
                src="/img/shop.png"
                alt="Alexandr"
                width={34}
                height={32}
                className={styles.iconBB}
              />
            </div>
            <div className={`${styles.boxBB} ${styles.black}`}>
              <div className={styles.tagBB}>
                Мебель и товары
                <br /> для дома
              </div>
              <Image
                src="/img/home.png"
                alt="Alexandr"
                width={34}
                height={32}
                className={styles.iconBB}
              />
            </div>
            <div className={`${styles.boxBB} ${styles.gray}`}>
              <div className={styles.tagBB}>Недвижимость</div>
              <Image
                src="/img/hotel.png"
                alt="Alexandr"
                width={34}
                height={32}
                className={styles.iconBB}
              />
            </div>
            <div className={`${styles.boxBB} ${styles.gray}`}>
              <div className={styles.tagBB}>
                Строительство
                <br /> и ремонт
              </div>
              <Image
                src="/img/tool.png"
                alt="Alexandr"
                width={34}
                height={32}
                className={styles.iconBB}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
