import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Footer from "../../../components/footer/footer";
import DynamicHeader from "../../../components/header/header";
import TagBlock from "../../../components/context/tagBlock/tagBlock";
import { Benefit } from "../../../components/context/benefit/benefit";
import { Case } from "../../../components/context/case/case";
import { Reviews } from "../../../components/context/reviews/reviews";

export default function Services() {
  return (
    <>
      <Head>
        <meta name="yandex-verification" content="a88abba2c0cfb9f4" />
      </Head>
      <div className={styles.home_section}>
        <DynamicHeader />
        <TagBlock />
        <Benefit />
        <Case />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}
