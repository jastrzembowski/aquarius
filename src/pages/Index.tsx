import { Navbar, Hero, Services, WhyChooseUs, Process, Testimonials, Contact, Footer } from "@/components";
import styles from "./Index.module.scss";

const Index = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
