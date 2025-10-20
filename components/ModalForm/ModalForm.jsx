import { useState } from "react";
import styles from "./ModalForm.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ModalForm({ onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const formatPhoneForDisplay = (digits) => {
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

  const handleSubmit = async (e) => {
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
      const response = await fetch("/api/send-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/thanks");
      } else {
        console.error("API error:", data);
        alert(`Ошибка: ${data.error || "Неизвестная ошибка"}`);
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Не удалось отправить заявку. Проверьте соединение.");
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>
            Получить
            <br className="mob" /> бесплатный аудит
          </h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
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
                } else if (digits.length <= 11) {
                  setPhone(digits);
                }
              }}
              className={styles.input}
              required
            />

            <div className={styles.agreement}>
              <div
                className={`${styles.checkbox} ${
                  isAgreed ? styles.checked : ""
                }`}
                onClick={() => setIsAgreed(!isAgreed)}
              ></div>
              <label className={styles.label}>
                Я принимаю условия <br className="mob" />
                <Link href="/politic">политики конфиденциальности</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={!isAgreed || isLoading}
              className={`${styles.submitButton} ${
                (!isAgreed || isLoading) && styles.disabled
              }`}
            >
              {isLoading ? (
                "Отправка..."
              ) : (
                <div className={styles.textSub}>Оставить заявку</div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
