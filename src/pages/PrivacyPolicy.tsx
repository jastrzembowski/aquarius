import styles from "./PrivacyPolicy.module.scss";

export default function PrivacyPolicy() {
  return (
    <article className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Polityka prywatności</h1>
        <p className={styles.lead}>
          Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych
          przekazywanych przez użytkowników w związku z korzystaniem ze strony internetowej
          aquarius-osuszanie.pl.
        </p>

        <section className={styles.section} aria-labelledby="section-1">
          <h2 id="section-1" className={styles.sectionTitle}>
            1. Informacje ogólne
          </h2>
          <p className={styles.text}>Administratorem danych osobowych jest:</p>
          <div className={styles.companyBlock}>
            <p className={styles.companyName}>AQUARIUS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</p>
            <address className={styles.address}>
              ul. Krzysztofa Kolumba 23A / 40
              <br />
              78-100 Kołobrzeg, Polska
            </address>
            <p className={styles.nip}>NIP: 6711869391</p>
          </div>
          <p className={styles.contactLabel}>Kontakt z administratorem</p>
          <p className={styles.text}>
            <a className={styles.contactLink} href="mailto:biuro@aquarius-osuszanie.pl">
              biuro@aquarius-osuszanie.pl
            </a>
          </p>
          <p className={styles.text}>
            <a className={styles.contactLink} href="tel:+48726434249">
              726 434 249
            </a>
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-2">
          <h2 id="section-2" className={styles.sectionTitle}>
            2. Zakres zbieranych danych
          </h2>
          <p className={styles.text}>
            Administrator przetwarza dane osobowe przekazywane dobrowolnie przez użytkownika za
            pośrednictwem formularza kontaktowego.
          </p>
          <p className={styles.text}>Zakres danych może obejmować:</p>
          <ul className={styles.list}>
            <li>imię i nazwisko</li>
            <li>adres e-mail</li>
            <li>numer telefonu</li>
            <li>adres nieruchomości</li>
            <li>opis zgłoszenia</li>
          </ul>
          <p className={styles.text}>
            Podanie danych jest dobrowolne, jednak niezbędne do nawiązania kontaktu i obsługi
            zapytania.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-3">
          <h2 id="section-3" className={styles.sectionTitle}>
            3. Cel i podstawa przetwarzania danych
          </h2>
          <p className={styles.text}>Dane osobowe przetwarzane są w celu:</p>
          <ul className={styles.list}>
            <li>kontaktu z użytkownikiem</li>
            <li>przygotowania odpowiedzi lub oferty</li>
            <li>realizacji zgłoszenia</li>
          </ul>
          <p className={styles.text}>Podstawą prawną przetwarzania danych jest:</p>
          <ul className={styles.list}>
            <li>art. 6 ust. 1 lit. a RODO – zgoda użytkownika (wysłanie formularza)</li>
            <li>art. 6 ust. 1 lit. b RODO – działania zmierzające do zawarcia umowy</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="section-4">
          <h2 id="section-4" className={styles.sectionTitle}>
            4. Sposób przetwarzania danych
          </h2>
          <p className={styles.text}>
            Dane przekazane w formularzu kontaktowym są przesyłane na skrzynkę e-mail administratora
            i wykorzystywane wyłącznie do obsługi zapytania.
          </p>
          <p className={styles.text}>
            Administrator nie wykorzystuje danych do celów marketingowych.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-5">
          <h2 id="section-5" className={styles.sectionTitle}>
            5. Okres przechowywania danych
          </h2>
          <p className={styles.text}>Dane osobowe będą przechowywane przez okres:</p>
          <ul className={styles.list}>
            <li>niezbędny do realizacji zapytania</li>
            <li>lub do momentu wycofania zgody</li>
          </ul>
          <p className={styles.note}>
            W przypadku nawiązania współpracy – przez okres wymagany przepisami prawa (np.
            podatkowymi).
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-6">
          <h2 id="section-6" className={styles.sectionTitle}>
            6. Odbiorcy danych
          </h2>
          <p className={styles.text}>
            Dane mogą być przekazywane podmiotom wspierającym administratora w obsłudze strony i
            poczty e-mail (np. dostawca hostingu lub poczty elektronicznej), wyłącznie w zakresie
            niezbędnym do realizacji usług.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-7">
          <h2 id="section-7" className={styles.sectionTitle}>
            7. Prawa użytkownika
          </h2>
          <p className={styles.text}>Użytkownik ma prawo do:</p>
          <ul className={styles.list}>
            <li>dostępu do swoich danych</li>
            <li>sprostowania danych</li>
            <li>usunięcia danych</li>
            <li>ograniczenia przetwarzania</li>
            <li>przenoszenia danych</li>
            <li>wniesienia sprzeciwu</li>
            <li>wycofania zgody w dowolnym momencie</li>
          </ul>
          <p className={styles.text}>
            W celu realizacji swoich praw należy skontaktować się z administratorem.
          </p>
          <p className={styles.text}>
            Użytkownik ma również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
            Osobowych.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-8">
          <h2 id="section-8" className={styles.sectionTitle}>
            8. Cookies
          </h2>
          <p className={styles.text}>
            Strona nie wykorzystuje plików cookies do celów analitycznych ani marketingowych.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-9">
          <h2 id="section-9" className={styles.sectionTitle}>
            9. Zabezpieczenia danych
          </h2>
          <p className={styles.text}>
            Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę
            przetwarzanych danych osobowych.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-10">
          <h2 id="section-10" className={styles.sectionTitle}>
            10. Zmiany polityki prywatności
          </h2>
          <p className={styles.text}>
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce
            prywatności.
          </p>
        </section>
      </div>
    </article>
  );
}
