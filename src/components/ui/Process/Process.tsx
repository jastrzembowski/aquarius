import { PhoneCall, Search, Wrench, CheckCircle } from "lucide-react";
import styles from "./Process.module.scss";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Zgłoszenie awaryjne",
    description: "Skontaktuj się z nami 24/7. Wysyłamy ekipę nawet w ciągu kilku godzin od telefonu.",
  },

  {
    icon: Search,
    step: "02",
    title: "Tworzenie dokumentacji",
    description: "Tworzymy szczegółową dokumentację wilgoci dla ubezpieczyciela.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Osuszanie i naprawa",
    description: "Uruchamiamy sprzęt przemysłowy i codziennie monitorujemy postępy prac.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Końcowa kontrola",
    description: "Potwierdzamy pełne osuszenie i przekazujemy kompletną dokumentację.",
  },
];

export const Process = () => {
  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Jak to działa</span>
          <h2 className={styles.title}>Nasz proces</h2>
          <p className={styles.subtitle}>
            Sprawdzone 4 kroki, dzięki którym szybko przywracamy budynek do bezpiecznego stanu.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((item, index) => (
            <div key={item.title} className={styles.card}>
              {index < steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.iconWrap}>
                <item.icon size={30} className={styles.icon} />
              </div>
              <span className={styles.stepLabel}>KROK {item.step}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
