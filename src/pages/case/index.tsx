import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Footer from "../../../components/footer/footer";
import DynamicHeader from "../../../components/header/header";
import { Case } from "../../../components/case/cases/case";
import ServiceCase from "../../../components/case/service/service";
import Tag from "../../../components/case/tag/tag";

export default function Services() {
  return (
    <>
      <Head>
        <meta name="yandex-verification" content="a88abba2c0cfb9f4" />
      </Head>
      <div className={styles.home_section}>
        <DynamicHeader />
        <Tag />
        <ServiceCase />
        <Case />
        <Footer />
      </div>
    </>
  );
}
