import Head from "next/head";
import { IndexLayout } from "../layouts";

export default function customers() {

  return (
    <div>
      <Head>
        <title>Lexir - Customers </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col justify-center items-center">
            <h1> Customers </h1>
      </div>
    </div>
  );
}

customers.PageLayout = IndexLayout;
