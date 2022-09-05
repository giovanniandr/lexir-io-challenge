import Head from "next/head";
import { IndexLayout } from "../layouts";

export default function products() {

  return (
    <div>
      <Head>
        <title>Lexir - Products </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col justify-center items-center">
            <h1> Products </h1>
      </div>
    </div>
  );
}

products.PageLayout = IndexLayout;
