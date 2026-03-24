import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Błąd 404: użytkownik próbował wejść na nieistniejącą ścieżkę:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>Ups! Nie znaleziono strony</p>
        <a href="/" className={styles.link}>
          Wróć na stronę główną
        </a>
      </div>
    </div>
  );
};

export default NotFound;
