import { Droplets, Wind, Thermometer, Shield, Building2, ClipboardCheck } from "lucide-react";
import styles from "./Services.module.scss";

const services = [
  {
    icon: Droplets,
    title: "Usuwanie skutków zalania",
    description: "Pełne odpompowanie wody i osuszanie konstrukcji po powodziach, przeciekach lub pękniętych rurach.",
  },
  {
    icon: Wind,
    title: "Osuszanie powietrza",
    description: "Profesjonalne osuszacze przemysłowe przywracające bezpieczny poziom wilgotności.",
  },
  {
    icon: Thermometer,
    title: "Kontrola klimatu",
    description: "Monitorowanie temperatury i wilgotności przez cały proces osuszania.",
  },
  {
    icon: Shield,
    title: "Zapobieganie pleśni",
    description: "Działania antybakteryjne i przeciwgrzybiczne ograniczające rozwój pleśni podczas prac.",
  },
  {
    icon: Building2,
    title: "Osuszanie obiektów komercyjnych",
    description: "Skalowalne rozwiązania dla magazynów, biur i hal przemysłowych.",
  },
  {
    icon: ClipboardCheck,
    title: "Ocena zawilgocenia",
    description: "Szczegółowa mapa wilgoci i dokumentacja przydatna przy roszczeniach ubezpieczeniowych.",
  },
];

export const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>
            Czym się zajmujemy
          </span>
          <h2 className={styles.title}>
            Nasze usługi
          </h2>
          <p className={styles.subtitle}>
            Od szybkiej interwencji po długoterminowe zarządzanie wilgocią, zapewniamy kompleksowe osuszanie budynków.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div
              key={service.title}
              className={styles.card}
            >
              <div className={styles.iconWrap}>
                <service.icon size={24} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>
                {service.title}
              </h3>
              <p className={styles.cardDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

