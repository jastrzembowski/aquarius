import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "@/constants/constants";

export const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    if ((formData.get("company") as string) !== "") {
      return;
    }

    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const address = (formData.get("address") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      alert("Uzupełnij wymagane pola.");
      return;
    }

    await emailjs.send(
      "service_hclukf8",
      "template_m53z70d",
      {
        name,
        phone,
        email,
        address,
        message,
        time: new Date().toISOString(),
      },
      "EsAA4KRM7ZH3pzrNe",
    );

    setShowToast(true);
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => {
      setShowToast(false);
    }, 3500);
    form.reset();
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <span className={styles.kicker}>
              Skontaktuj się z nami
            </span>
            <h2 className={styles.title}>
              Gotowy, by rozwiązać problem wilgoci?
            </h2>
            <p className={styles.description}>
              Skontaktuj się z nami, aby otrzymać bezpłatną wycenę. Jesteśmy dostępni przez całą dobę.
            </p>

            <div className={styles.infoList}>
              {[
                { icon: Phone, label: "Linia awaryjna", value: CONTACT_PHONE },
                { icon: Mail, label: "E-mail", value: CONTACT_EMAIL },
                { icon: MapPin, label: "Biuro", value: CONTACT_ADDRESS },
              ].map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <div className={styles.infoIconWrap}>
                    <item.icon size={20} className={styles.infoIcon} />
                  </div>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    <div className={styles.infoValue}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>
              Poproś o bezpłatną wycenę
            </h3>
            <div
              className={`${styles.toast} ${showToast ? styles.toastVisible : ""}`}
              role="status"
              aria-live="polite"
            >
              Wiadomośc została wysłana!
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formTwoCols}>
                <input type="text" name="company" style={{ display: "none" }} />
                <input
                  name="name"
                  placeholder="Imię i nazwisko"
                  className={styles.input}
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Numer telefonu"
                  className={styles.input}
                />
              </div>
              <input
                name="email"
                placeholder="Adres e-mail"
                type="email"
                className={styles.input}
                required
              />
              <input
                name="address"
                placeholder="Adres nieruchomości"
                className={styles.input}
              />
              <textarea
                name="message"
                placeholder="Opisz swoją sytuację..."
                rows={4}
                className={styles.textarea}
                required
              />
              <button type="submit" className={styles.submitButton}>
                Wyślij zgłoszenie
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
