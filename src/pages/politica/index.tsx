import Head from "next/head";
import styles from "@/styles/Home.module.css";
import TagBlock from "../../../components/politic/tagBlock/tagBlock";
import Footer from "../../../components/footer/footer";
import DynamicHeader from "../../../components/header/header";
import ZoomFallbackWrapper from "@/components/ZoomFallbackWrapper";

export default function Politic() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Политика обработки персональных данных</title>
      </Head>
      <ZoomFallbackWrapper>
        <div className={styles.home_section}>
          <DynamicHeader />
          <TagBlock />
          <Footer />
        </div>
      </ZoomFallbackWrapper>
    </>
  );
}
