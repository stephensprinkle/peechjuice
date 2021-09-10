import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Peech from "../assets/images/peech.png";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Your NFT Toolkit | PeechJuice | Until the juice runs out...
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.peech}>
          <Image src={Peech} placeholder="blur" layout="fill" />
        </div>
        <h1 className={styles.title}>PeechJuice</h1>
        <h2 className={styles.description}>
          Your{" "}
          <a href="https://ethereum.org/en/nft/" target="_blank">
            NFT
          </a>{" "}
          Toolkit
        </h2>
        <span className={styles.supplement}>coming soon(ish)</span>
      </main>

      <footer className={styles.footer}>
        <div>
          by{" "}
          <a href="https://hi.sprinkle.io/" target="_blank">
            sprinkle
          </a>
        </div>
        <div>
          built in <span style={{ color: "red" }}>&#9829;</span>
        </div>
      </footer>
    </div>
  );
}
