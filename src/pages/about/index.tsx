import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Footer from "../../../components/footer/footer";
import DynamicHeader from "../../../components/header/header";
import TagBlock from "../../../components/about/tagBlock/tagBlock";
import ProducerBlock from "../../../components/home/producer/producerBlock";
import Agency from "../../../components/home/agency/agency";
import { Team } from "../../../components/home/team/team";
import Rule from "../../../components/home/rule/rule";

export default function About() {
  return (
    <>
      <div className={styles.home_section}>
        <DynamicHeader />
        <TagBlock />
        <ProducerBlock />
        <Agency />
        <Rule />
        <Team />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
