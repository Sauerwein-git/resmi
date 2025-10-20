import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Footer from "../../../components/footer/footer";
import DynamicHeader from "../../../components/header/header";
import TagBlock from "../../../components/context/tagBlock/tagBlock";
import { Benefit } from "../../../components/context/benefit/benefit";
import BisnProm from "../../../components/context/bisnProm/bisnProm";
import { Case } from "../../../components/context/case/case";
import { Reviews } from "../../../components/context/reviews/reviews";
import Effect from "../../../components/context/effect/effect";
import Setting from "../../../components/context/setting/setting";
import Report from "../../../components/context/report/report";
import Enemy from "../../../components/context/enemy/enemy";
import Nose from "../../../components/context/nose/nose";
import ProducerBlock from "../../../components/home/producer/producerBlock";
import Agency from "../../../components/home/agency/agency";
import { Team } from "../../../components/home/team/team";
import Rule from "../../../components/home/rule/rule";
import Certificate from "../../../components/context/certificate/certificate";
import Free from "../../../components/context/free/free";
import Answers from "../../../components/context/answers/answers";
import Else from "../../../components/context/else/else";

import TraficBlock from "../../../components/home/trafic/traficBlock";

export default function Context() {
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
        <BisnProm />
        <Effect />
        <Setting />
        <Report />
        <Enemy />
        <Nose />
        <ProducerBlock />
        <Agency />
        <Rule />
        <Team />
        <Certificate />
        <Free />
        <Answers />
        <Else />
        <TraficBlock />
        <Footer />
      </div>
    </>
  );
}
