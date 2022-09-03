import Head from "next/head";
import styles from "../styles/Home.module.css";
import SideNavBar from "../components/SideNavBar.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Billing profile details</title>
        <meta name="description" content="Billing profile details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-elixir w-full min-h-screen">
        <SideNavBar/>
      </main>
    </div>
  );
}
