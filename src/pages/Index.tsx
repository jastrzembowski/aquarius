import { Contact, Footer, Hero, Process, Services, Testimonials, WhyChooseUs } from "@/components";

import styles from "./Index.module.scss";

const Index = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
