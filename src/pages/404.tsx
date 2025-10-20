import styles from "@/styles/Home.module.css";
import TagBlock from "../../components/404/tagBlock/tagBlock";
import Footer from "../../components/footer/footer";

export default function Custom404() {
  return (
    <>
      <div className={styles.home_section}>
        <TagBlock />
        <Footer />
      </div>
    </>
  );
}
