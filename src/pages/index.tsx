import Head from "next/head";
import { IndexLayout } from "../layouts";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Lexir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col justify-center items-center">
            <h1> Dashboard </h1>
      </div>
    </div>
  );
}

Home.PageLayout = IndexLayout;
