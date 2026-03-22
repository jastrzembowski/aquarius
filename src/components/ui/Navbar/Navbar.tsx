import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.scss";
import { Logo } from "../Logo/Logo";
import { CONTACT_EMAIL } from "@/constants/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Usługi", href: "services" },
    { label: "O nas", href: "about" },
    { label: "Jak to działa", href: "process" },
    { label: "Kontakt", href: "contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Logo size="md" />

        <div className={styles.desktopMenu}>
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={styles.ctaButton}
          >
            Poproś o wycenę
          </a>
        </div>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={styles.mobileCtaButton}
          >
            Poproś o wycenę
          </a>
        </div>
      )}
    </nav>
  );
};
