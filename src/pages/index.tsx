import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Billing profile details</title>
        <meta name="description" content="Billing profile details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <a href="#">
            <img
              className="object-cover"
              src="../assets/logo.png"
              alt="Lexir Logo"
            />
          </a>
        </div>

      </main>
    </div>
  );
}
