import Head from "next/head";
import styles from "@/styles/Home.module.css";
import TagBlock from "../../../components/thanks/tagBlock/tagBlock";
import Footer from "../../../components/footer/footer";
import DynamicHeader from "../../../components/header/header";
import ZoomFallbackWrapper from "@/components/ZoomFallbackWrapper";

export default function Thanks() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
