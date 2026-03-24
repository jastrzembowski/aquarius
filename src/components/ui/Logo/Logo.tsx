import styles from "./Logo.module.scss";

type LogoProps = {
  size?: "sm" | "md";
  href?: string;
  className?: string;
};

export const Logo = ({ size = "md", href = "#", className = "" }: LogoProps) => {
  const sizeClass = size === "sm" ? styles.logoSm : styles.logoMd;
  const rootClassName = `${styles.logo} ${sizeClass} ${className}`.trim();

  return (
    <a href={href} className={rootClassName}>
      <span className={styles.logoMark} aria-hidden="true" />
      Aquarius Osuszanie
    </a>
  );
};
