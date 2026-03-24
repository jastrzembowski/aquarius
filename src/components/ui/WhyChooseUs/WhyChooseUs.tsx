import { CheckCircle2 } from "lucide-react";

import styles from "./WhyChooseUs.module.scss";

const reasons = [
  "Certyfikowani i ubezpieczeni technicy",
  "Dostępna interwencja awaryjna 24/7",
  "Nowoczesny sprzęt osuszający",
  "Szczegółowa dokumentacja wilgoci",
  "Pomoc w roszczeniach ubezpieczeniowych",
  "Metody przyjazne dla środowiska",
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <span className={styles.kicker}>Dlaczego Aquarius Osuszanie</span>
            <h2 className={styles.title}>Doświadczenie w osuszaniu budynków</h2>
            <p className={styles.description}>
              Dzięki latom doświadczenia pomogliśmy setkom klientów szybko oraz skutecznie usunąć
              skutki zalań. Nasze systematyczne podejście zapewnia dokładne osuszanie przy
              minimalnych utrudnieniach.
            </p>

            <div className={styles.reasons}>
              {reasons.map((reason) => (
                <div key={reason} className={styles.reasonItem}>
                  <CheckCircle2 size={20} className={styles.reasonIcon} />
                  <span className={styles.reasonText}>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.statsPanel}>
              <div className={styles.statsGrid}>
                {[
                  { value: "100%", label: "Zadowolenie klientów" },
                  { value: "4h", label: "Średni czas reakcji" },
                  { value: "100+", label: "Osuszonych budynków" },
                  { value: "0", label: "Incydentów bezpieczeństwa" },
                ].map((stat) => (
                  <div key={stat.label} className={styles.statItem}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
