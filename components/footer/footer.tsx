import Image from "next/image";
import styles from "./footer.module.css";
import { useState } from "react";
import Link from "next/link";
import ModalForm from "../ModalForm/ModalForm";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
      <div className={` ${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          <div className={styles.smallTag}></div>
          <div className={styles.invBlock}>
            <div className={styles.leftBlockInv}></div>
            <div className={styles.rightBlockInv}></div>
          </div>
          <div className={styles.block}>
            <div className={styles.leftBlock}>
              <div className={styles.leftF}>
                <div className={styles.lTag}>RE SEARCH IT</div>
                <div className={styles.lText}>rock your business</div>
                <div className={styles.imgBlock}>
                  <Image
                    src="/img/hatter.png"
                    alt="Previous"
                    width={45}
                    height={45}
                    className={styles.navButton}
                  />
                  <Image
                    src="/img/flash.png"
                    alt="Previous"
                    width={45}
                    height={45}
                    className={styles.navButton}
                  />
                  <Image
                    src="/img/target.png"
                    alt="Previous"
                    width={45}
                    height={45}
                    className={styles.navButton}
                  />
                </div>
              </div>
            </div>
            <div className={styles.rightBlock}>
              Ваш партнер
              <br className="mob" /> в digital-маркетинге. Повышаем{" "}
              <span className={styles.red}>
                продажи
                <br className="mob" /> и прибыль
              </span>{" "}
              в вашем бизнесе
            </div>
          </div>
          <div className={styles.block}>
            <div className={`${styles.leftBlock} ${styles.obl}`}>
              <div className={styles.leftF}>
                <div className={styles.tagPlaceHolder}>
                  <div className={styles.placeText}>Позвонить</div>
                  <div className={styles.placeAnswer}>
                    <Link href="tel:+79999999999">+7 999 999 99 99</Link>
                  </div>
                </div>
                <div className={styles.tagPlaceHolder}>
                  <div className={styles.placeText}>Написать</div>
                  <div className={styles.placeAnswer}>hi@research-it.ru</div>
                </div>
                <div className={styles.tagPlaceHolder}>
                  <div className={styles.placeText}>Быстрая связь</div>
                  <div className={styles.placeAnswer}>
                    <Link href="https://web.telegram.org/  ">
                      Telegram / WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.rightBlock} ${styles.flex}`}>
              <div className={styles.clientBlock}>
                <div className={styles.tagClient}>
                  <Link href="/seo">Трафик и клиенты</Link>
                </div>
                <div className={styles.textClient}>
                  <Link href="/context">Контекстная реклама в Я.Директ</Link>
                </div>
                <div className={styles.textClient}>
                  <Link href="/context">SEO-продвижение</Link>
                </div>
                <div className={styles.textClient}>
                  <span
                    onClick={() => setIsModalOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Бесплатный аудит вашей рекламы
                  </span>
                </div>
              </div>
              <div className={styles.caseBlock}>
                <div className={styles.caseTag}>
                  <Link href="/case">Кейсы</Link>
                </div>
                <div className={styles.caseTag}>
                  <Link href="/about">о нас</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tag}>RE SEARCH IT</div>
          <div className={styles.divrBlock}>
            <div className={styles.divrLink}>
              <Link href="/">© RE SEARCH IT, 2025</Link>
            </div>
            <div className={styles.divrLink}>
              <Link href="/politic">Пользовательское соглашение</Link>
            </div>
            <div className={styles.divrLink}>
              <Link href="/politic">
                Политика обработки персональных данных
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
