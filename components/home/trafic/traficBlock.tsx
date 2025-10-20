import { useState } from "react";
import Image from "next/image";
import styles from "./traficBlock.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TraficBlock() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const formatPhoneForDisplay = (digits: string): string => {
    if (digits.startsWith("8")) {
      const parts = [
        digits.slice(0, 1),
        digits.slice(1, 4),
        digits.slice(4, 7),
        digits.slice(7, 9),
        digits.slice(9, 11),
      ].filter(Boolean);
      return parts.join("-");
    }

    if (digits.startsWith("7")) {
      let res = "+7";
      const p1 = digits.slice(1, 4);
      const p2 = digits.slice(4, 7);
      const p3 = digits.slice(7, 9);
      const p4 = digits.slice(9, 11);

      if (p1) res += `(${p1}`;
      if (p2) res += `)-${p2}`;
      if (p3) res += `-${p3}`;
      if (p4) res += `-${p4}`;
      return res;
    }

    return digits;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || phone.length < 11) {
      alert("Пожалуйста, заполните все поля корректно.");
      return;
    }

    if (!isAgreed) {
      alert("Пожалуйста, примите условия политики конфиденциальности.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgkjbjb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        setName("");
        setPhone("");
        setIsAgreed(false);
        router.push("/thanks");
      } else {
        alert("Ошибка отправки. Попробуйте позже.");
      }
    } catch (err) {
      console.error(err);
      alert("Не удалось отправить заявку. Проверьте соединение.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.section}>
          <div className={styles.smallTag}>УСЛУГИ</div>
          <div className={styles.invBlock}>
            <div className={styles.leftBlockInv}></div>
            <div className={styles.rightBlockInv}></div>
          </div>
          <div className={styles.block}>
            <div className={styles.leftBlock}>Трафик и клиенты</div>
            <div className={styles.rightBlock}>
              Составляем стратегию строго от вашей экономики, чтобы не просто
              увеличивать рекламные бюджеты, а наращивать прибыль бизнеса
            </div>
          </div>
          <div className={styles.cartBlock}>
            <div className={styles.leftCartBlock}>
              <div className={styles.contextCart}>
                <div className={styles.upFloor}>
                  <div className={styles.leftPos}>
                    <span className={styles.redDotWrapper}>
                      <Image
                        src="/img/redDot.png"
                        alt="dot"
                        width={16.68}
                        height={16.68}
                      />
                    </span>
                    <div className={styles.cartTag}>
                      Контекстная реклама в Я.Директ{" "}
                    </div>
                  </div>
                  <Image
                    src="/img/yandexDirect.png"
                    alt="yandex"
                    width={70}
                    height={70}
                  />
                </div>
                <div className={styles.botFloor}>
                  <div className={styles.contextText}>
                    Выстроим стратегию и полностью заберем ответственность за
                    канал трафика
                  </div>
                  <Image
                    src="/img/cartArrow.png"
                    alt="arrow"
                    width={37.65}
                    height={18.2}
                  />
                </div>
                <div className={`${styles.mob} ${styles.bottomContent}`}>
                  <Image
                    src="/img/yandexDirect.png"
                    alt="yandex"
                    width={48}
                    height={48}
                  />
                  <div className={styles.smallArrow}>
                    <Image
                      src="/img/cartArrow.png"
                      alt="arrow"
                      width={30.12}
                      height={14.56}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.seoCart}>
                <div className={styles.upFloor}>
                  <div className={styles.leftPos}>
                    <span className={styles.redDotWrapper}>
                      <Image
                        src="/img/redDot.png"
                        alt="dot"
                        width={16.68}
                        height={16.68}
                      />
                    </span>
                    <div className={`${styles.cartTag} ${styles.seoTagWidth}`}>
                      SEO-продвижение
                      <br className={styles.mob} /> в Яндекс и Google
                    </div>
                  </div>
                  <div className={styles.imgCart}>
                    <Image
                      src="/img/yandex.png"
                      alt="yandex"
                      width={70}
                      height={70}
                    />
                    <Image
                      src="/img/google.png"
                      alt="google"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>
                <div className={styles.botFloor}>
                  <div className={styles.contextText}>
                    Выстроим стратегию и полностью заберем ответственность за
                    канал трафика
                  </div>
                  <Image
                    src="/img/cartArrow.png"
                    alt="arrow"
                    width={37.65}
                    height={18.2}
                  />
                </div>
                <div className={`${styles.mob} ${styles.bottomContent}`}>
                  <div className={styles.imgCart}>
                    <Image
                      src="/img/yandex.png"
                      alt="yandex"
                      width={48}
                      height={48}
                    />
                    <Image
                      src="/img/google.png"
                      alt="google"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className={styles.smallArrow}>
                    <Image
                      src="/img/cartArrow.png"
                      alt="arrow"
                      width={30.12}
                      height={14.56}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightCartBlock}>
              <div className={styles.auditTag}>Аудит вашей рекламы</div>
              <div className={styles.auditText}>
                Найдем эффективные действия и ошибки в текущих процессах,
                соберем детальную аналитику по рынку:{" "}
                <strong>что успешного делают ваши конкуренты</strong> и какие
                проверенные действия можно повторить, чтобы не слить деньги на
                тест
              </div>

              <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.formInput}
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Номер телефона"
                    value={formatPhoneForDisplay(phone)}
                    onChange={(e) => {
                      const input = e.target.value;
                      const digits = input.replace(/\D/g, "");

                      if (digits === "") {
                        setPhone("");
                      } else if (digits.length === 1) {
                        if (digits === "7" || digits === "8") {
                          setPhone(digits);
                        }
                      } else if (phone.length > 0 && digits.length <= 11) {
                        setPhone(digits);
                      }
                    }}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.confirmZone}>
                  <div className={styles.buttonZone}>
                    <div
                      className={`${styles.checkBox} ${
                        isAgreed ? styles.checked : ""
                      }`}
                      onClick={() => setIsAgreed(!isAgreed)}
                    ></div>
                    <div className={styles.conf}>
                      Я принимаю условия
                      <br />{" "}
                      <Link href="/politic">
                        <span className={styles.confLink}>
                          политики конфиденциальности
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.massZone}>
                    <Link
                      href="https://web.telegram.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.ctaButton}
                    >
                      TG
                    </Link>
                    <Link
                      href="https://www.whatsapp.com/?lang=ru_RU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.ctaButton}
                    >
                      WA
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isAgreed || isLoading}
                  className={`${styles.affButton} ${
                    (!isAgreed || isLoading) && styles.affButtonDisabled
                  }`}
                >
                  {isLoading ? (
                    "Отправка..."
                  ) : (
                    <>
                      <div className={styles.textButtontext}>
                        Начать с бесплатного аудита{" "}
                      </div>
                      <Image
                        src="/img/cartArrow.png"
                        alt="arrow"
                        width={36}
                        height={20}
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className={styles.soon}>СКОРО</div>
          <div className={styles.invBlock}>
            <div className={styles.leftBlockInv}></div>
            <div className={styles.rightBlockInv}></div>
          </div>
          <div className={styles.block}>
            <div className={styles.leftBlock}>Сайты и приложения</div>
            <div className={`${styles.rightBlock} ${styles.textSite}`}>
              Заходим в любые изменения сайта или разработку после расчета
              плановых метрик. Строим работу прозрачно, поэтапно и озвучиваем
              точные бюджеты перед стартом работы
            </div>
          </div>
          <div className={styles.blockBox}>
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <div className={styles.upTag}>Разработка приложения</div>
                <Image
                  src="/img/phone.png"
                  alt="phone"
                  width={40}
                  height={40}
                />
              </div>
              <div className={styles.boxBot}>
                Реализуем вашу задумку качественно, с прозрачными сроками и
                бюджетом
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <div className={styles.upTag}>
                  Повышение <br className={styles.mob} />
                  конверсии сайта
                </div>
                <Image
                  src="/img/converse.png"
                  alt="converse"
                  width={40}
                  height={40}
                />
              </div>
              <div className={styles.boxBot}>
                Повышаем эффективность сайта, чтобы увеличить доход бизнеса
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.boxUp}>
                <div className={styles.upTag}>
                  Разработка
                  <br /> сайта
                </div>
                <Image
                  src="/img/phone.png"
                  alt="phone"
                  width={40}
                  height={40}
                />
              </div>
              <div className={styles.boxBot}>
                Полностью погружаемся в специфику и делаем эффективный сайт с
                нуля без лишних тестов
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
