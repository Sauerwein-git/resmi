"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import ModalForm from "../ModalForm/ModalForm";

const DynamicHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeadStickyVisible, setIsHeadStickyVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAuditModal = () => {
    setIsModalOpen(false);
    setIsAuditModalOpen(true);
  };

  const closeAuditModal = () => setIsAuditModalOpen(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeadStickyVisible(window.scrollY >= 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (!isClient) return null;

  return (
    <>
      <div
        className={`${styles.headSticky} ${
          isHeadStickyVisible ? styles.visible : ""
        }`}
      >
        <div className={styles.underFlex}>
          <div className={styles.flex}>
            <div className={styles.flexss}>
              <div className={styles.leftBlock}>
                <Link href="/">
                  <div className={styles.Tag}>RE SEARCH IT</div>
                  <div className={styles.description}>rock your business</div>
                </Link>
              </div>
              <div className={styles.mediumBlock}>
                <div className={styles.borderMediumBlock}>
                  <div className={styles.textMediumBlock}>
                    Ваш партнер в digital-маркетинге.
                    <br />
                    Повышаем продажи и прибыль в вашем бизнесе
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightBLock}>
              <button className={styles.menu} onClick={toggleMenu}>
                МЕНЮ&nbsp;&nbsp;
                <span className={styles.ravno}>
                  {isModalOpen ? (
                    <img
                      src="/img/krest.png"
                      alt="Закрыть"
                      width={20}
                      height={19}
                    />
                  ) : (
                    <img
                      src="/img/rav.png"
                      alt="Открыть"
                      width={30}
                      height={5}
                    />
                  )}
                </span>
              </button>

              <button
                type="button"
                className={styles.report}
                onClick={openAuditModal}
              >
                <div className={styles.reportContent}>
                  <span className={styles.notry}>
                    <img
                      src="/img/smallzayavka.png"
                      alt="arrow"
                      width={86}
                      height={14}
                    />
                  </span>
                  <span className={styles.try}>
                    <img
                      src="/img/zayavka.png"
                      alt="arrow"
                      width={190}
                      height={17}
                    />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.fon}></div>
      </div>

      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <span
              className={styles.modalClose}
              onClick={() => setIsModalOpen(false)}
            ></span>
            <div className={`${styles.modalContent} ${styles.deskModal}`}>
              <div className={styles.root}>
                <div className={styles.modalColumn}>
                  <div className={styles.underMovalColumn}>
                    <div className={styles.modalTitle}>
                      <Link href="/seo">ТРАФИК И КЛИЕНТЫ</Link>
                    </div>
                    <ul className={styles.modalList}>
                      <li>
                        <Link href="/context">
                          Контекстная реклама в Я.Директ
                        </Link>
                      </li>
                      <li>
                        <Link href="/seo">SEO-продвижение</Link>
                      </li>
                      <li onClick={openAuditModal}>
                        <span className={styles.modalRedText}>
                          <span className={styles.red}>Бесплатный аудит</span>{" "}
                          вашей рекламы
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.metaLink}>
                    <div className={styles.numberLink}>Позвонить</div>
                    <div className={styles.linkOfMeta}>+7 999 999 99 99</div>
                  </div>
                </div>
                <div className={styles.modalColumn}>
                  <div className={styles.underMovalColumn}>
                    <div className={`${styles.modalTitle} ${styles.flMT}`}>
                      <div className={styles.titleTitle}>
                        Сайты и приложения
                      </div>
                      <div className={styles.textSoon}>скоро</div>
                    </div>
                    <ul className={styles.modalList}>
                      <li>Повышение конверсии сайта</li>
                      <li>Разработка сайта</li>
                      <li>Разработка приложения</li>
                    </ul>
                  </div>
                  <div className={styles.metaLink}>
                    <div className={styles.numberLink}>Написать</div>
                    <div className={styles.linkOfMeta}>hi@research-it.ru</div>
                  </div>
                </div>
                <div className={styles.modalColumn}>
                  <div className={styles.underMovalColumn}>
                    <div
                      className={styles.modalTitle}
                      style={{ maxWidth: "460px" }}
                    >
                      <Link href="/about">О нас</Link>
                      <Link href="/blog">Блог</Link>
                    </div>
                    <div className={`${styles.modalTitle} ${styles.TitleFlex}`}>
                      Наши клиенты заработали
                      <br />
                      <span className={styles.red}>
                        более 1 368 000 000 <span className="rub">₽</span>
                      </span>
                    </div>
                    <ul className={styles.modalList}>
                      <li>
                        <Link href="/case">
                          <span className={styles.modalRedText}>
                            Смотреть все кейсы [&nbsp;
                            <span className={styles.arrowEl}>→</span>&nbsp;]
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`${styles.metaLink} ${styles.metaLinkLastChild}`}
                  >
                    <div className={styles.numberLink}>Быстрая связь</div>
                    <div className={styles.typeOfLink}>
                      <Link href="https://web.telegram.org/a/">
                        <div className={styles.linkOfMeta}>Telegram</div>
                      </Link>
                      <div className={styles.linkOfMeta}> / </div>
                      <Link href="https://www.whatsapp.com/?lang=ru_RU">
                        <div className={styles.linkOfMeta}>WhatsApp</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.modalContent} ${styles.mobModal}`}>
              <div className={styles.root1}>
                <div className={styles.modalColumn}>
                  <div className={styles.modalTitle}>ТРАФИК И КЛИЕНТЫ</div>
                  <ul className={styles.modalList}>
                    <li>
                      <Link href="/context">
                        Контекстная реклама в Я.Директ
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo">SEO-продвижение</Link>
                    </li>
                    <li onClick={openAuditModal}>
                      <span className={styles.modalRedText}>
                        <span className={styles.red}>Бесплатный аудит</span>{" "}
                        вашей рекламы
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={styles.modalColumn}>
                  <div className={styles.modalTitle}>Сайты и приложения</div>
                  <ul className={styles.modalList}>
                    <li>
                      <Link href="/context">Повышение конверсии сайта</Link>
                    </li>
                    <li>
                      <Link href="/seo">Разработка сайта</Link>
                    </li>
                    <li>
                      <Link href="/services" className={styles.modalRedText}>
                        Разработка приложения
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.modalColumn}>
                  <div className={styles.modalTitle}>О нас</div>
                  <div
                    className={`${styles.modalTitle} ${styles.modalTitleLastChild}`}
                  >
                    Наши клиенты заработали
                    <br />
                    <span className={styles.red}>более 1 368 000 000 </span>
                  </div>
                  <ul className={styles.modalList}>
                    <li>
                      <Link href="/case" className={styles.modalRedText}>
                        смотреть все кейсы [&nbsp;
                        <span className={styles.arrowEl}>→</span>&nbsp;]
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.metaLink}>
                  <div className={styles.numberLink}>Позвонить</div>
                  <div className={styles.linkOfMeta}>+7 999 999 99 99</div>
                </div>
                <div className={styles.metaLink}>
                  <div className={styles.numberLink}>Написать</div>
                  <div className={styles.linkOfMeta}>hi@research-it.ru</div>
                </div>
                <div
                  className={`${styles.metaLink} ${styles.metaLinkLastChild}`}
                >
                  <div className={styles.numberLink}>Быстрая связь</div>
                  <div className={styles.typeOfLink}>
                    <Link href="https://web.telegram.org/a/">
                      <div className={styles.linkOfMeta}>Telegram</div>
                    </Link>
                    <div className={styles.linkOfMeta}> / </div>
                    <Link href="https://www.whatsapp.com/?lang=ru_RU">
                      <div className={styles.linkOfMeta}>WhatsApp</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAuditModalOpen && (
        <div
          className={styles.modalOverlay}
          style={{ zIndex: 2000 }}
          onClick={closeAuditModal}
        >
          <div
            className={styles.modal}
            style={{ zIndex: 2001, padding: "0px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalForm onClose={closeAuditModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicHeader;
