import { Star } from "lucide-react";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    name: "Krzysztof",
    role: "Właściciel nieruchomości",
    quote:
      "Korzystałem z usług firmy Aquarius. Firma profesjonalna z bardzo nowoczesnym i skutecznym sprzętem do osuszania. Bardzo dobrzy fachowcy i co ważne terminowi i słowni. Na kłopoty polecam w pełni Aquariusa.",
    stars: 5,
  },
  {
    name: "Robert",
    role: "Właściciel nieruchomości",
    quote:
      "Polecam z całego serducho, szybko, profesjonalnie i Panowie z doświadczeniem.",
    stars: 5,
  },
  {
    name: "Anita",
    role: "Właściciel nieruchomości",
    quote:
      "Firma godna polecenia szybko sprawnie i fachowo. Polecam",
    stars: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Opinie klientów</span>
          <h2 className={styles.title}>Co mówią nasi klienci w Google Reviews</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: item.stars }).map((_, idx) => (
                  <Star key={idx} size={16} className={styles.star} />
                ))}
              </div>
              <p className={styles.quote}>"{item.quote}"</p>
              <div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.role}>{item.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
