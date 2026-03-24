import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Logo size="sm" href="/" />
          <span className={styles.companyInfo}>AQUARIUS Sp. z o.o. | NIP: 6711869391</span>
        </div>
        <div className={`${styles.column} ${styles.columnEnd}`}>
          <a href="/privacy-policy" className={styles.privacyPolicyLink}>
            Polityka prywatności
          </a>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Aqurius-Osuszanie. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
