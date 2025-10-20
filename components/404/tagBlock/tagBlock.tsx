"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./tagBlock.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TagBlock() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <>
      <div className={`${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div
            className={styles.back}
            onClick={goBack}
            role="button"
            tabIndex={0}
          >
            [<span className={styles.arrow}>←</span>] Назад
          </div>
          <div className={styles.image}>
            <Image src="/img/404.png" alt="hatter" width={507} height={355} />
          </div>

          <div className={styles.smallText}>
            Эта страница потерялась, но мы уже анализируем данные, чтобы её
            найти
          </div>
          <Link href="/">
            <div className={styles.button}>
              вернуться на главную [<span className={styles.arrow}>→</span>]
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
