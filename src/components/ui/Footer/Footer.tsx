import styles from "./Footer.module.scss";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo size="sm" />
        <p className={styles.copy}>
          © {new Date().getFullYear()} Aqurius-Osuszanie. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

