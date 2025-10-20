import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./agency.module.css";

export default function Agency() {
  return (
    <>
      <div className={` ${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.textTag}>
            <div className={styles.tag}>
              «Создаю <br className={styles.mob} />
              такое агентство,{" "}
              <span className={styles.red}>услугами которого</span> буду
              пользоваться сам»
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.leftBlock}>
              <div className={styles.wT}>
                Никто из агентств, с которыми я работал, не задавал мне вопросов
                о развитии моего бизнеса, о моих ожиданиях или о том, какие
                обороты и прибыль я хочу получить
              </div>
            </div>
            <div className={styles.invBlock}>
              <div className={styles.leftBlockInv}></div>
              <div className={styles.rightBlockInv}></div>
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.wTag}>
                Все, что их интересовало, — увеличение моего бюджета ради их
                комиссии
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
