import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/magazyn.png";
import styles from "./Hero.module.scss";
import { CONTACT_PHONE } from "@/constants/constants";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src={heroImage}
          alt="Profesjonalny sprzęt do osuszania budynków w trakcie pracy"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.badge} ${styles.fadeInUp}`}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>Interwencja awaryjna 24/7</span>
          </div>

          <h1 className={`${styles.title} ${styles.fadeInUp}`} style={{ animationDelay: "0.1s" }}>
            Profesjonalne
            <br />
            <span className={styles.titleAccent}>Osuszanie budynków</span>
            <br />
            i szybka pomoc
          </h1>

          <p className={`${styles.description} ${styles.fadeInUp}`} style={{ animationDelay: "0.2s" }}>
            Szybkie i skuteczne usuwanie wilgoci z obiektów komercyjnych oraz mieszkalnych.
            Minimalizujemy przestoje i zapobiegamy uszkodzeniom konstrukcji.
          </p>

          <div className={`${styles.actions} ${styles.fadeInUp}`} style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className={styles.primaryButton}>
              Zamów usługę
              <ArrowRight size={20} />
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className={styles.secondaryButton}>
              <Phone size={20} />
              Linia awaryjna
            </a>
          </div>

          <div className={`${styles.stats} ${styles.fadeInUp}`} style={{ animationDelay: "0.4s" }}>
            {[
              { value: "100+", label: "Zrealizowanych projektów" },
              { value: "do 4h", label: "Średni czas reakcji" },
              { value: "90+", label: "Maszyn osuszających" },
            ].map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
