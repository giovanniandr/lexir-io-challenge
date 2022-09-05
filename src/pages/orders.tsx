import Head from "next/head";
import { IndexLayout } from "../layouts";

export default function orders() {

  return (
    <div>
      <Head>
        <title>Lexir - Orders </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col justify-center items-center">
            <h1> Orders </h1>
      </div>
    </div>
  );
}

orders.PageLayout = IndexLayout;
