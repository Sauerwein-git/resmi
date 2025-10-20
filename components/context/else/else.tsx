import styles from "./else.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Else() {
  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.tag}>
            Чем мы еще можем быть <span className="red">полезны</span>
          </div>
        </div>
      </div>
    </>
  );
}
