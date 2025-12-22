import Image from "next/image";
import styles from "./footer.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isThanksPage = isClient && router.pathname === "/thanks";

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

    if (digits.startsWith("7") || digits.startsWith("9")) {
      let res = "+7";
      const start = digits.startsWith("9") ? 0 : 1;
      const p1 = digits.slice(start, start + 3);
      const p2 = digits.slice(start + 3, start + 6);
      const p3 = digits.slice(start + 6, start + 8);
      const p4 = digits.slice(start + 8, start + 10);

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
      const response = await fetch("https://research-it.ru/api/send-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setName("");
        setPhone("");
        setIsAgreed(false);
        router.push("/thanks");
      } else {
        alert(`Ошибка: ${data.error || "Неизвестная ошибка"}`);
      }
    } catch (err) {
      alert("Не удалось отправить заявку. Проверьте соединение.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={` ${styles.background} ${styles.pc}`}>
        <div className={styles.section}>
          {!isThanksPage && (
            <div className={styles.smallTag}>
              Бесплатный аудит вашей рекламы
            </div>
          )}
          <div className={styles.invBlock}>
            <div className={styles.leftBlockInv}></div>
            <div className={styles.rightBlockInv}></div>
          </div>
          {!isThanksPage && (
            <div className={styles.block}>
              <div className={styles.leftBlock}>
                <div className={styles.firstTag}>
                  Есть запрос на рост бизнеса?{" "}
                  <span className="red">Давайте пообщаемся</span>
                </div>
                <div className={styles.firstText}>
                  Мы оценим текущую ситуацию и расскажем, чем можем быть вам
                  полезны. Свяжемся в течение 24-х часов и все организуем
                </div>
              </div>
              <div className={styles.rightBlock}>
                <div className={styles.forma}>
                  <form onSubmit={handleSubmit} className={styles.footerForm}>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={styles.footerInput}
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
                          if (
                            digits === "7" ||
                            digits === "8" ||
                            digits === "9"
                          ) {
                            setPhone(digits);
                          }
                        } else if (digits.length <= 11) {
                          setPhone(digits);
                        }
                      }}
                      className={styles.footerInput}
                      required
                    />
                    <div className={styles.footerAgreement}>
                      <div
                        className={`${styles.footerCheckbox} ${
                          isAgreed ? styles.checked : ""
                        }`}
                        onClick={() => setIsAgreed(!isAgreed)}
                      ></div>
                      <label className={styles.footerLabel}>
                        Я принимаю условия{" "}
                        <Link href="/politica">
                          политики конфиденциальности
                        </Link>
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={!isAgreed || isLoading}
                      className={`${styles.footerSubmitButton} ${
                        (!isAgreed || isLoading) && styles.disabled
                      }`}
                    >
                      {isLoading ? "Отправка..." : "Оставить заявку"}
                      <Image
                        src="/img/cartArrow.png"
                        alt="arrow"
                        width={40}
                        height={20}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
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
                    <Link href="https://web.telegram.org/">
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
                    onClick={() => {
                      const event = new MouseEvent("click", { bubbles: true });
                      document
                        .querySelector("#openModal")
                        ?.dispatchEvent(event);
                    }}
                    style={{ cursor: "pointer" }}
                    id="openModal"
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
              <Link href="/politica">
                Политика обработки персональных данных
              </Link>
            </div>
            <div className={styles.divrLink}>
              <Link href="/politica">Пользовательское соглашение</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
